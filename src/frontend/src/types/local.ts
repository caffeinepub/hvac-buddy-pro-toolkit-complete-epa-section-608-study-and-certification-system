// Local type definitions for frontend-specific types not exported from backend

import type { Principal } from "@icp-sdk/core/principal";

// Study Mode enum
export enum StudyMode {
  beginner = "beginner",
  expert = "expert",
}

// Guest Profile (local only - not stored in backend)
export interface GuestProfile {
  principal: Principal | null; // Null for anonymous guests
  name: string;
  company: string;
  studyMode: StudyMode;
  sessionStart: bigint;
}

// Progress tracking
export interface Progress {
  completedChapters: number[];
  masteryScore: number;
}

// Study Material
export interface StudyMaterial {
  id: bigint;
  title: string;
  content: string;
  chapter: number;
  flashcards: Flashcard[];
  quiz: Quiz;
  relatedAssets: bigint[];
}

export interface Flashcard {
  question: string;
  answer: string;
}

export interface Quiz {
  questions: Question[];
  answerKey: string[];
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

// Job Management
export interface Job {
  id: bigint;
  customer: bigint;
  description: string;
  status: JobStatus;
  startTime: bigint;
  endTime: bigint | null;
  partsUsed: bigint[];
  images: any[]; // ExternalBlob[]
}

export enum JobStatus {
  pending = "pending",
  inProgress = "inProgress",
  completed = "completed",
  cancelled = "cancelled",
}

// Parts Database
export interface PartSpec {
  id: bigint;
  name: string;
  type: string;
  specs: string;
  compatibility: string[];
  price: number;
  available: boolean;
}

// Data Logging
export interface LogEntry {
  id: bigint;
  dataType: DataType;
  value: number;
  timestamp: bigint;
  relatedJob: bigint | null;
}

export enum DataType {
  temperature = "temperature",
  pressure = "pressure",
  amperage = "amperage",
  refrigerantWeight = "refrigerantWeight",
  vibration = "vibration",
}

// Troubleshooting Chat
export interface TroubleshootingChatSession {
  id: bigint;
  userId: Principal;
  startedAt: bigint;
  lastUpdated: bigint;
  messages: ChatMessage[];
  currentStep: number;
  status: ChatSessionStatus;
  measurements: MeasurementEntry[];
  likelyCauses: string[];
  recommendedActions: string[];
  linkedResources: ResourceLink[];
  confidenceLevel: ConfidenceLevel | null;
  transcripts: TranscriptEntry[];
}

export interface ChatMessage {
  id: bigint;
  sender: MessageSender;
  content: string;
  timestamp: bigint;
  messageType: MessageType;
}

export enum MessageSender {
  user = "user",
  assistant = "assistant",
  systemMessage = "systemMessage",
}

export enum MessageType {
  text = "text",
  diagnosticStep = "diagnosticStep",
  recommendation = "recommendation",
  safetyAlert = "safetyAlert",
  educationalTip = "educationalTip",
  question = "question",
  answer = "answer",
  measurementEntry = "measurementEntry",
}

export enum ChatSessionStatus {
  inProgress = "inProgress",
  completed = "completed",
  cancelled = "cancelled",
  archived = "archived",
}

export interface MeasurementEntry {
  id: bigint;
  type: MeasurementType;
  value: number;
  units: string;
  timestamp: bigint;
  source: MeasurementSource;
}

export enum MeasurementType {
  temperature = "temperature",
  pressure = "pressure",
  superheat = "superheat",
  subcooling = "subcooling",
  airflow = "airflow",
  electrical = "electrical",
  refrigerantWeight = "refrigerantWeight",
}

export enum MeasurementSource {
  manual = "manual",
  device = "device",
  voiceEntry = "voiceEntry",
}

export interface ResourceLink {
  id: bigint;
  title: string;
  url: string;
  resourceType: ResourceType;
  description: string;
}

export enum ResourceType {
  lesson = "lesson",
  diagram = "diagram",
  calculator = "calculator",
  video = "video",
  article = "article",
  tool = "tool",
  quiz = "quiz",
}

export interface TranscriptEntry {
  id: bigint;
  content: string;
  timestamp: bigint;
  author: string;
}

export enum ConfidenceLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

// EPA Content
export interface EpaCoreContent {
  id: number;
  title: string;
  content: string;
  section: EpaSection;
  flashcards: Flashcard[];
  quiz: EpaQuiz;
  relatedAssets: bigint[];
}

export enum EpaSection {
  core = "core",
  typeI = "typeI",
  typeII = "typeII",
  typeIII = "typeIII",
  universal = "universal",
}

export interface EpaQuiz {
  questions: EpaQuizQuestion[];
  answerKey: string[];
}

export interface EpaQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: QuestionDifficulty;
  section: EpaSection;
}

// EPA Exam Question (for exam simulation)
export interface EpaExamQuestion {
  id: bigint;
  section: EpaSection;
  difficulty: QuestionDifficulty;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  regulatoryReference: string;
  lessonLink: string;
  topicCategory: string;
}

export enum QuestionDifficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

// Progress Tracking
export interface ProgressTracking {
  modulesCompleted: EpaSection[];
  quizScores: number[];
  readinessRatings: number[];
  simulatedExams: ExamSimulationResult[];
  passThroughRate: number;
  currentSection: EpaSection;
  currentProgress: number;
}

export interface ExamSimulationResult {
  score: number;
  passed: boolean;
  completed: boolean;
}

// Diagnostic Session
export interface DiagnosticSession {
  id: bigint;
  user: Principal;
  mode: DiagnosticMode;
  createdAt: bigint;
  lastUpdated: bigint;
  status: SessionStatus;
  stepsCompleted: number;
  results: SessionResults;
}

export enum DiagnosticMode {
  beginner = "beginner",
  expert = "expert",
}

export enum SessionStatus {
  inProgress = "inProgress",
  completed = "completed",
  cancelled = "cancelled",
}

export interface SessionResults {
  thermostat: ThermostatResult | null;
  powerCheck: PowerCheckResult | null;
  airFilter: AirFilterResult | null;
  airflow: AirflowResult | null;
  temperature: TempResult | null;
  pressureCheck: PressureResult | null;
  superheatSubcooling: SuperheatSubcoolingResult | null;
  compressorCheck: CompressorResult | null;
  coilCondition: CoilConditionResult | null;
  leakDetection: LeakDetectionResult | null;
  deltaT: number | null;
  superheat: number | null;
  subcooling: number | null;
  ampVariance: number | null;
  confidenceLevel: ConfidenceLevel | null;
  likelyCauses: string[];
  recommendedActions: string[];
  partsNeeded: string[];
  estimatedTime: number | null;
}

export interface ThermostatResult {
  modeCorrect: boolean;
  tempSet: boolean;
  measurements: Measurement;
}

export interface PowerCheckResult {
  powerStatus: boolean;
  measurements: Measurement;
}

export interface AirFilterResult {
  filterCondition: boolean;
  measurements: Measurement;
}

export interface AirflowResult {
  airflowStatus: boolean;
  measurements: Measurement;
}

export interface TempResult {
  returnTemp: number;
  supplyTemp: number;
  measurements: Measurement;
}

export interface PressureResult {
  suctionPressure: number;
  dischargePressure: number;
  measurements: Measurement;
}

export interface SuperheatSubcoolingResult {
  superheat: number;
  subcooling: number;
  measurements: Measurement;
}

export interface CompressorResult {
  ampDraw: number;
  nameplateAmp: number;
  measurements: Measurement;
}

export interface CoilConditionResult {
  coilStatus: boolean;
  measurements: Measurement;
}

export interface LeakDetectionResult {
  leakStatus: boolean;
  measurements: Measurement;
}

export interface Measurement {
  value: number;
  units: string;
  timestamp: bigint;
}

// Video Library
export interface VideoRecord {
  id: bigint;
  title: string;
  category: VideoCategory;
  description: string;
  url: string;
  linkedLessonTopic: string;
  duration: number; // Duration in seconds (not bigint)
  thumbnailUrl: string;
  relatedModules?: string[];
  relatedTools?: string[];
}

export enum VideoCategory {
  // Legacy values — kept for backward compatibility
  epaCore = "epaCore",
  typeI = "typeI",
  typeII = "typeII",
  typeIII = "typeIII",
  epaPlaylists = "epaPlaylists",
  diagnosticsMeasurements = "diagnosticsMeasurements",
  electricalControls = "electricalControls",
  refrigerantHandling = "refrigerantHandling",
  toolsInstruments = "toolsInstruments",
  // New structured categories
  epa608Prep = "epa608Prep",
  hvacFundamentals = "hvacFundamentals",
  electricalCircuits = "electricalCircuits",
  refrigerantDiagnostics = "refrigerantDiagnostics",
  hvacToolsService = "hvacToolsService",
}

// Suppliers
export interface SupplierRecord {
  id: bigint;
  name: string;
  category: SupplierCategory;
  city: string;
  zipCode: string;
  phone: string;
  website: string;
  distanceMiles: number;
}

export enum SupplierCategory {
  parts = "parts",
  refrigerant = "refrigerant",
  tools = "tools",
  wholesale = "wholesale",
}

export interface UserSupplier {
  id: bigint;
  name: string;
  location: string;
  contact: string;
  category: SupplierCategory;
  notes: string;
  rating: number;
}
