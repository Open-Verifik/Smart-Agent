export const DEFAULT_GUIDE_ASPECT_RATIO = 0.75;

export const DEFAULT_FACE_GUIDE = {
    minImageHeight: 240,
    minFaceBoxSide: 222,
    minFaceAreaRatio: 0.23,
    successFramesRequired: 3,
    ssdMinConfidence: 0.18,
} as const;

const CENTER_TOLERANCE_X_MULTIPLIER = 1.08;
const CENTER_TOLERANCE_Y_MULTIPLIER = 1.08;

export type OvalGuide = {
    center: { x: number; y: number };
    radius: { x: number; y: number };
    margin: { x: number; y: number };
};

export type FaceGuideError =
    | { kind: 'center'; title: string; subtitle: string; directions: string }
    | { kind: 'close'; title: string; subtitle: string }
    | { kind: 'no_face'; title: string; subtitle: string };

export const getCenterAndRadius = (
    imageHeight: number,
    imageWidth: number,
    aspectRatio = DEFAULT_GUIDE_ASPECT_RATIO
): OvalGuide => {
    const data: OvalGuide = {
        center: { x: imageWidth / 2, y: imageHeight / 2 },
        radius: { x: 0, y: 0 },
        margin: { y: imageHeight * 0.05, x: 0 },
    };

    data.margin.x = data.margin.y * 0.8;
    data.radius.y = imageHeight * 0.42;
    data.radius.x = data.radius.y * aspectRatio;

    if (data.radius.x * 2 >= imageWidth) {
        data.radius.x = imageWidth * 0.48;
        data.radius.y = data.radius.x / aspectRatio;
    }

    return data;
};

const inRange = (value: number, min: number, max: number) => value >= min && value <= max;

export const evaluateCentering = (
    noseX: number,
    noseY: number,
    oval: OvalGuide
): { ok: boolean; directions: string } => {
    const { center, margin } = oval;
    const marginX = margin.x * CENTER_TOLERANCE_X_MULTIPLIER;
    const marginY = margin.y * CENTER_TOLERANCE_Y_MULTIPLIER;
    const inRangeX = inRange(noseX, center.x - marginX, center.x + marginX);
    const inRangeY = inRange(noseY, center.y, center.y + marginY * 2.5);

    if (inRangeX && inRangeY) {
        return { ok: true, directions: '' };
    }

    let directions = '';
    if (!inRangeX) directions += noseX < center.x - marginX ? '←' : '→';
    if (!inRangeY) directions += noseY < center.y ? '↓' : '↑';

    return { ok: false, directions };
};

export const evaluateFaceSize = (
    faceBoxWidth: number,
    faceBoxHeight: number,
    imageWidth: number,
    imageHeight: number,
    minFaceAreaRatio: number,
    minFaceBoxSide: number
): { ok: boolean } => {
    const faceArea = faceBoxWidth * faceBoxHeight;
    const imageArea = imageWidth * imageHeight;
    const proportion = faceArea / imageArea;

    if (proportion < minFaceAreaRatio || faceBoxWidth < minFaceBoxSide || faceBoxHeight < minFaceBoxSide) {
        return { ok: false };
    }

    return { ok: true };
};

export type GuideEvaluation = {
    error: FaceGuideError | null;
    incrementStreak: boolean;
};

export const evaluateGuidedFrame = (input: {
    imageWidth: number;
    imageHeight: number;
    oval: OvalGuide;
    noseX: number;
    noseY: number;
    faceBoxWidth: number;
    faceBoxHeight: number;
}): GuideEvaluation => {
    const { imageWidth, imageHeight, oval, noseX, noseY, faceBoxWidth, faceBoxHeight } = input;

    const centering = evaluateCentering(noseX, noseY, oval);
    const sizeOk = evaluateFaceSize(
        faceBoxWidth,
        faceBoxHeight,
        imageWidth,
        imageHeight,
        DEFAULT_FACE_GUIDE.minFaceAreaRatio,
        DEFAULT_FACE_GUIDE.minFaceBoxSide
    );

    if (!centering.ok) {
        return {
            error: {
                kind: 'center',
                title: 'Center your face',
                subtitle: 'Align your face with the oval',
                directions: centering.directions,
            },
            incrementStreak: false,
        };
    }

    if (!sizeOk.ok) {
        return {
            error: {
                kind: 'close',
                title: 'Move closer',
                subtitle: 'Your face should fill more of the frame',
            },
            incrementStreak: false,
        };
    }

    return { error: null, incrementStreak: true };
};
