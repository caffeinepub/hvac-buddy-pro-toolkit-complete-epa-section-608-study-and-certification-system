import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface HelpMessage {
    id: ID;
    content: string;
    sender: MessageSender;
    messageType: MessageType;
    timestamp: Time;
}
export type Time = bigint;
export interface OnboardingScreen {
    title: string;
    icon: string;
    description: string;
}
export interface HelpSessionView {
    id: ID;
    status: ChatSessionStatus;
    principal: Principal;
    messages: Array<HelpMessage>;
    startAt: Time;
    lastUpdated: Time;
    confidenceLevel?: ConfidenceLevel;
    followUps: Array<string>;
}
export type ID = bigint;
export interface Progress {
    completedChapters: Array<bigint>;
    masteryScore: bigint;
}
export interface OnboardingPayload {
    screens: Array<OnboardingScreen>;
}
export interface UserProfile {
    id: ID;
    name: string;
    email: string;
    company: string;
    experienceYears: bigint;
    progress: Progress;
    studyMode: StudyMode;
    phone: string;
    certifications: Array<string>;
}
export enum ChatSessionStatus {
    cancelled = "cancelled",
    completed = "completed",
    inProgress = "inProgress",
    archived = "archived"
}
export enum ConfidenceLevel {
    low = "low",
    high = "high",
    medium = "medium"
}
export enum MessageSender {
    user = "user",
    systemMessage = "systemMessage",
    assistant = "assistant"
}
export enum MessageType {
    question = "question",
    diagnosticStep = "diagnosticStep",
    safetyAlert = "safetyAlert",
    text = "text",
    answer = "answer",
    measurementEntry = "measurementEntry",
    recommendation = "recommendation",
    educationalTip = "educationalTip"
}
export enum StudyMode {
    beginner = "beginner",
    expert = "expert"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addHelpMessage(message: HelpMessage): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    clearCurrentHelpSession(): Promise<void>;
    clearHelpMessages(): Promise<void>;
    finishHelpSession(): Promise<void>;
    getAllUsers(): Promise<Array<UserProfile>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCurrentHelpMessages(): Promise<Array<HelpMessage>>;
    getFollowUps(): Promise<Array<string>>;
    getHelpMessages(): Promise<Array<HelpMessage>>;
    getHelpSession(): Promise<HelpSessionView | null>;
    getOnboardingPayload(): Promise<OnboardingPayload>;
    getUserProfile(): Promise<UserProfile>;
    getUserProfileByPrincipal(user: Principal): Promise<UserProfile | null>;
    initializeAccessControl(): Promise<void>;
    initializeUserProfile(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    isWalkthroughCompleted(): Promise<boolean>;
    markWalkthroughCompleted(): Promise<void>;
    removeUserProfile(): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setUserProfile(profile: UserProfile): Promise<void>;
    startHelpSession(): Promise<void>;
    updateHelpSession(messagesToAdd: Array<HelpMessage>, followupsToAdd: Array<string>): Promise<void>;
}
