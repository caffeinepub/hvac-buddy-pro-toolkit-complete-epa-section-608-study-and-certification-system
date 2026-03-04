// Local type definitions for study system
// These mirror the backend types but are defined locally since they're not exported

export type StudyMode = { __kind__: "beginner" } | { __kind__: "expert" };

export const createBeginnerMode = (): StudyMode => ({ __kind__: "beginner" });
export const createExpertMode = (): StudyMode => ({ __kind__: "expert" });
