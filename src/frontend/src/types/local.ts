// Local type definitions for frontend-specific types
import type { Principal } from '@icp-sdk/core/principal';

// User profile types - defined locally since not exported from backend
export interface Progress {
  completedChapters: bigint[];
  masteryScore: bigint;
}

export interface UserProfile {
  id: bigint;
  name: string;
  company: string;
  certifications: string[];
  experienceYears: bigint;
  email: string;
  phone: string;
  progress: Progress;
  studyMode: StudyMode;
}

export interface GuestProfile {
  principal: Principal;
  name: string;
  company: string;
  studyMode: StudyMode;
  sessionStart: bigint;
}

// StudyMode - define locally to match backend enum structure
export enum StudyMode {
  beginner = 'beginner',
  expert = 'expert',
}

// Supplier types
export enum SupplierCategory {
  parts = 'parts',
  refrigerant = 'refrigerant',
  tools = 'tools',
  wholesale = 'wholesale',
}

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

export interface UserSupplier {
  id: bigint;
  name: string;
  location: string;
  contact: string;
  category: SupplierCategory;
  notes: string;
  rating: bigint;
}

// Video types (not in backend yet)
export enum VideoCategory {
  epaCore = 'epaCore',
  typeI = 'typeI',
  typeII = 'typeII',
  typeIII = 'typeIII',
  epaPlaylists = 'epaPlaylists',
  hvacFundamentals = 'hvacFundamentals',
  diagnosticsMeasurements = 'diagnosticsMeasurements',
  electricalControls = 'electricalControls',
  refrigerantHandling = 'refrigerantHandling',
  toolsInstruments = 'toolsInstruments',
}

export interface VideoRecord {
  id: bigint;
  title: string;
  category: VideoCategory;
  description: string;
  url: string;
  linkedLessonTopic: string;
  duration: bigint;
  thumbnailUrl: string;
}

// Study types
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

export interface StudyMaterial {
  id: bigint;
  title: string;
  content: string;
  chapter: bigint;
  flashcards: Flashcard[];
  quiz: Quiz;
  relatedAssets: bigint[];
}

// Job types (not in backend yet)
export enum JobStatus {
  pending = 'pending',
  inProgress = 'inProgress',
  completed = 'completed',
  cancelled = 'cancelled',
}

export interface Job {
  id: bigint;
  customer: bigint;
  description: string;
  status: JobStatus;
  startTime: bigint;
  endTime?: bigint;
  partsUsed: bigint[];
  images: Uint8Array[];
}

// Parts types (not in backend yet)
export interface PartSpec {
  id: bigint;
  name: string;
  type_: string;
  specs: string;
  compatibility: string[];
  price: bigint;
  available: boolean;
}

// Data logging types
export enum DataType {
  temperature = 'temperature',
  pressure = 'pressure',
  amperage = 'amperage',
  refrigerantWeight = 'refrigerantWeight',
  vibration = 'vibration',
}

export interface LogEntry {
  id: bigint;
  dataType: DataType;
  value: number;
  timestamp: bigint;
  relatedJob?: bigint;
}

// Diagnostic types
export enum DiagnosticMode {
  beginner = 'beginner',
  expert = 'expert',
}

export enum SessionStatus {
  inProgress = 'inProgress',
  completed = 'completed',
  cancelled = 'cancelled',
}

export enum ConfidenceLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export interface DiagnosticSession {
  id: bigint;
  user: Principal;
  mode: DiagnosticMode;
  createdAt: bigint;
  lastUpdated: bigint;
  status: SessionStatus;
  stepsCompleted: bigint;
  results: any;
}

// Chat types
export enum MessageType {
  text = 'text',
  diagnosticStep = 'diagnosticStep',
  recommendation = 'recommendation',
  safetyAlert = 'safetyAlert',
  educationalTip = 'educationalTip',
  question = 'question',
  answer = 'answer',
  measurementEntry = 'measurementEntry',
}

export enum MeasurementType {
  temperature = 'temperature',
  pressure = 'pressure',
  superheat = 'superheat',
  subcooling = 'subcooling',
  airflow = 'airflow',
  electrical = 'electrical',
  refrigerantWeight = 'refrigerantWeight',
}

export enum MeasurementSource {
  manual = 'manual',
  device = 'device',
  voiceEntry = 'voiceEntry',
}

export enum ResourceType {
  lesson = 'lesson',
  diagram = 'diagram',
  calculator = 'calculator',
  video = 'video',
  article = 'article',
  tool = 'tool',
  quiz = 'quiz',
}

export enum ChatSessionStatus {
  inProgress = 'inProgress',
  completed = 'completed',
  cancelled = 'cancelled',
  archived = 'archived',
}

export interface TroubleshootingChatSession {
  id: bigint;
  userId: Principal;
  startedAt: bigint;
  lastUpdated: bigint;
  messages: any[];
  currentStep: bigint;
  status: string;
  measurements: any[];
  likelyCauses: string[];
  recommendedActions: string[];
  linkedResources: any[];
  confidenceLevel?: any;
  transcripts: any[];
}

// EPA types (not in backend yet)
export enum EpaSection {
  core = 'core',
  typeI = 'typeI',
  typeII = 'typeII',
  typeIII = 'typeIII',
  universal = 'universal',
}

export enum QuestionDifficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

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

export interface EpaCoreContent {
  id: bigint;
  title: string;
  content: string;
  section: EpaSection;
  flashcards: Flashcard[];
  quiz: Quiz;
  relatedAssets: bigint[];
}

export interface ProgressTracking {
  modulesCompleted: EpaSection[];
  quizScores: bigint[];
  readinessRatings: bigint[];
  simulatedExams: any[];
  passThroughRate: bigint;
  currentSection: EpaSection;
  currentProgress: bigint;
}

// User role types
export enum UserRole {
  admin = 'admin',
  user = 'user',
  guest = 'guest',
}
