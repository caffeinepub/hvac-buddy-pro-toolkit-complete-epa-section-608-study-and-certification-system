import AccessControl "authorization/access-control";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Set "mo:core/Set";
import Storage "blob-storage/Storage";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Float "mo:core/Float";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type ID = Nat;
  var nextId = 1;

  func genId() : ID {
    let id = nextId;
    nextId += 1;
    id;
  };

  // Persistent State
  let accessControlState = AccessControl.initState();
  let jobs = Map.empty<ID, Job>();
  let parts = Map.empty<ID, PartSpec>();
  let logs = Map.empty<ID, LogEntry>();
  let studyMaterials = Map.empty<ID, StudyMaterial>();
  let diagnosticFlows = Map.empty<Text, DiagnosticFlow>();
  let jobOwners = Map.empty<ID, Principal>();
  let logOwners = Map.empty<ID, Principal>();
  let visualAssets = Map.empty<ID, VisualAsset>();
  let assetIdMap = Map.empty<ID, Storage.ExternalBlob>();
  let sessionOwners = Map.empty<ID, Principal>();
  let diagnosticSessions = Map.empty<ID, DiagnosticSession>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let guestProfiles = Map.empty<Principal, GuestProfile>();
  let initializedUsers = Map.empty<Principal, Bool>();
  let guidProfiles = Map.empty<Text, GuestProfile>();
  let guidRoleMapping = Map.empty<Text, StudyMode>();
  let epaCoreContent = Map.empty<Nat, EpaCoreContent>();
  let typeIContent = Map.empty<Nat, TypeIContent>();
  let typeIIContent = Map.empty<Nat, TypeIIContent>();
  let typeIIIContent = Map.empty<Nat, TypeIIIContent>();
  let universalContent = Map.empty<Nat, UniversalContent>();
  let epaQuizzes = Map.empty<Text, EpaQuiz>();
  let epaPracticeQuestions = Map.empty<Text, [EpaQuizQuestion]>();
  let examSimulations = Map.empty<Text, ExamSimulationResult>();
  let progressTracking = Map.empty<Principal, ProgressTracking>();
  let examHistory = Map.empty<Principal, ExamHistory>();
  let studyModules = Map.empty<Text, StudyModuleContent>();
  let studyProgress = Map.empty<Principal, StudyProgress>();
  let recoveryTrainingModules = Map.empty<Nat, RecoveryTrainingModule>();
  let trainingProgress = Map.empty<Principal, TrainingProgress>();
  let diagnosticAnalytics = Map.empty<Principal, DiagnosticAnalytics>();
  let offlineSessions = Map.empty<Principal, [OfflineSession]>();
  let troubleshootingChats = Map.empty<ID, TroubleshootingChatSession>();
  let chatOwners = Map.empty<ID, Principal>();
  let epaQuestionPool = Map.empty<ID, EpaExamQuestion>();
  let examAttempts = Map.empty<Principal, ExamAttempt>();
  let examSessions = Map.empty<Principal, ExamSession>();
  let videoLibrary = Map.empty<ID, VideoRecord>();
  let localSuppliers = Map.empty<ID, SupplierRecord>();
  let userSuppliers = Map.empty<Principal, [UserSupplier]>();
  let communityArticles = Map.empty<ID, CommunityArticle>();
  let articleOwners = Map.empty<ID, Principal>();
  let autoAddedVideos = Map.empty<Text, Bool>();
  let onboardingStatus = Map.empty<Principal, Bool>();
  let refrigerants = Map.empty<Text, Refrigerant>();
  let helpSessions = Map.empty<Principal, HelpSession>();

  // Types
  public type QuestionDifficulty = {
    #easy;
    #medium;
    #hard;
  };

  public type DiagnosticQuestion = {
    id : Text;
    text : Text;
    explanation : Text;
    options : [Text];
    inputType : InputType;
  };

  public type InputType = {
    #yesNo;
    #number;
    #measurement;
    #choice;
  };

  public type DiagnosticFlow = {
    symptom : Text;
    questions : [DiagnosticQuestion];
    rules : [Rule];
  };

  public type Rule = {
    condition : Condition;
    action : Action;
    nextQuestion : Text;
  };

  public type Condition = {
    questionId : Text;
    expectedAnswer : Answer;
  };

  public type Action = {
    #next;
    #terminate;
    #suggestion : Text;
    #alert : Text;
  };

  public type Answer = {
    #bool : ?Bool;
    #number : ?Float;
    #text : ?Text;
  };

  public type UserProfile = {
    id : ID;
    name : Text;
    company : Text;
    certifications : [Text];
    experienceYears : Nat;
    email : Text;
    phone : Text;
    progress : Progress;
    studyMode : StudyMode;
  };

  public type GuestProfile = {
    principal : Principal;
    name : Text;
    company : Text;
    studyMode : StudyMode;
    sessionStart : Time.Time;
  };

  public type StudyMode = {
    #beginner;
    #expert;
  };

  public type Progress = {
    completedChapters : [Nat];
    masteryScore : Nat;
  };

  public type VisualAsset = {
    id : ID;
    title : Text;
    description : Text;
    relatedModule : ModuleType;
    assetData : Storage.ExternalBlob;
    tooltip : Text;
    zoomLevel : Float;
    accessibilityText : Text;
    isSvg : Bool;
  };

  public type ModuleType = {
    #coreHvacLessons;
    #epa608Prep;
    #visualUi;
  };

  public type StudyMaterial = {
    id : ID;
    title : Text;
    content : Text;
    chapter : Nat;
    flashcards : [Flashcard];
    quiz : Quiz;
    relatedAssets : [ID];
  };

  public type Flashcard = {
    question : Text;
    answer : Text;
  };

  public type Quiz = {
    questions : [Question];
    answerKey : [Text];
  };

  public type Question = {
    question : Text;
    options : [Text];
    correctAnswer : Text;
  };

  public type Job = {
    id : ID;
    customer : ID;
    description : Text;
    status : JobStatus;
    startTime : Time.Time;
    endTime : ?Time.Time;
    partsUsed : [ID];
    images : [Storage.ExternalBlob];
  };

  public type JobStatus = {
    #pending;
    #inProgress;
    #completed;
    #cancelled;
  };

  public type PartSpec = {
    id : ID;
    name : Text;
    type_ : Text;
    specs : Text;
    compatibility : [Text];
    price : Nat;
    available : Bool;
  };

  public type LogEntry = {
    id : ID;
    dataType : DataType;
    value : Float;
    timestamp : Time.Time;
    relatedJob : ?ID;
  };

  public type DataType = {
    #temperature;
    #pressure;
    #amperage;
    #refrigerantWeight;
    #vibration;
  };

  public type CommunityArticle = {
    id : ID;
    author : ID;
    title : Text;
    content : Text;
    tags : [Text];
  };

  public type DiagnosticSession = {
    id : ID;
    user : Principal;
    mode : DiagnosticMode;
    createdAt : Time.Time;
    lastUpdated : Time.Time;
    status : SessionStatus;
    stepsCompleted : Nat;
    results : SessionResults;
  };

  public type DiagnosticMode = {
    #beginner;
    #expert;
  };

  public type SessionStatus = {
    #inProgress;
    #completed;
    #cancelled;
  };

  public type SessionResults = {
    thermostat : ?ThermostatResult;
    powerCheck : ?PowerCheckResult;
    airFilter : ?AirFilterResult;
    airflow : ?AirflowResult;
    temperature : ?TempResult;
    pressureCheck : ?PressureResult;
    superheatSubcooling : ?SuperheatSubcoolingResult;
    compressorCheck : ?CompressorResult;
    coilCondition : ?CoilConditionResult;
    leakDetection : ?LeakDetectionResult;
    deltaT : ?Float;
    superheat : ?Float;
    subcooling : ?Float;
    ampVariance : ?Float;
    confidenceLevel : ?ConfidenceLevel;
    likelyCauses : [Text];
    recommendedActions : [Text];
    partsNeeded : [Text];
    estimatedTime : ?Float;
  };

  public type ThermostatResult = {
    modeCorrect : Bool;
    tempSet : Bool;
    measurements : Measurement;
  };

  public type PowerCheckResult = {
    powerStatus : Bool;
    measurements : Measurement;
  };

  public type AirFilterResult = {
    filterCondition : Bool;
    measurements : Measurement;
  };

  public type AirflowResult = {
    airflowStatus : Bool;
    measurements : Measurement;
  };

  public type TempResult = {
    returnTemp : Float;
    supplyTemp : Float;
    measurements : Measurement;
  };

  public type PressureResult = {
    suctionPressure : Float;
    dischargePressure : Float;
    measurements : Measurement;
  };

  public type SuperheatSubcoolingResult = {
    superheat : Float;
    subcooling : Float;
    measurements : Measurement;
  };

  public type CompressorResult = {
    ampDraw : Float;
    nameplateAmp : Float;
    measurements : Measurement;
  };

  public type CoilConditionResult = {
    coilStatus : Bool;
    measurements : Measurement;
  };

  public type LeakDetectionResult = {
    leakStatus : Bool;
    measurements : Measurement;
  };

  public type Measurement = {
    value : Float;
    units : Text;
    timestamp : Time.Time;
  };

  public type ConfidenceLevel = {
    #low;
    #medium;
    #high;
  };

  public type TroubleshooterStep = {
    title : Text;
    diagnosticStep : DiagnosticStep;
  };

  public type DiagnosticStep = {
    #diagnosticStep : TroubleshooterStepContent;
    #measurementInput : MeasurementInput;
    #systemTypeSelection : SystemTypeSelection;
    #toolSelection : ToolSelection;
    #diagramWithTooltips : DiagramWithTooltips;
    #multiStepProcess : MultiStepProcess;
    #finalResults : FinalResults;
    #precheckGuidance : PrecheckGuidance;
    #systemTypeGuidance : SystemTypeGuidance;
    #plainText : Text;
    #multiStepGuidance : MultiStepGuidance;
    #finalResultsTable : FinalResultsTable;
    #defaultInput : DefaultInputType;
    #plainStep : TroubleshooterPlainStep;
    #safetyOverride : TroubleshooterSafetyOverride;
  };

  public type TroubleshooterPlainStep = {
    heading : Text;
    instructions : Text;
  };

  public type TroubleshooterSafetyOverride = {
    warning : Text;
    instructions : Text;
  };

  public type TroubleshooterStepContent = {
    explanation : Text;
    stepType : Text;
    toolsNeeded : Text;
  };

  public type MeasurementInput = {
    parameter : Text;
    expectedRange : (Float, Float);
  };

  public type CallbackId = Text;

  public type SystemTypeSelection = {
    options : [Text];
    onSelectCallback : CallbackId;
  };

  public type ToolSelection = {
    tools : [Text];
    visuals : [VisualData];
  };

  public type VisualData = {
    image : Storage.ExternalBlob;
    description : Text;
  };

  public type DiagramWithTooltips = {
    image : Storage.ExternalBlob;
    tooltips : [TooltipData];
  };

  public type TooltipData = {
    description : Text;
    position : (Float, Float);
  };

  public type MultiStepProcess = {
    steps : [ProcessStep];
    progress : Float;
  };

  public type ProcessStep = {
    stepNumber : Nat;
    description : Text;
  };

  public type FinalResults = {
    summary : Text;
    confidenceRatings : [Text];
  };

  public type PrecheckGuidance = {
    instructions : Text;
    manuals : [ManualResource];
  };

  public type ManualResource = {
    title : Text;
    content : Text;
    link : Text;
  };

  public type SystemTypeGuidance = {
    systemType : Text;
    starterGuide : Text;
    referenceValues : [Text];
  };

  public type MultiStepGuidance = {
    heading : Text;
    instructions : Text;
    steps : [Nat];
  };

  public type FinalResultsTable = {
    heading : Text;
    results : [Nat];
  };

  public type DefaultInputType = {
    fieldLabel : Text;
    inputType : Text;
  };

  public type TrainingProgress = {
    completedModules : [Nat];
    completionDate : ?Time.Time;
    masteryLevel : Nat;
    attempts : Nat;
  };

  public type RecoveryTrainingModule = {
    id : Nat;
    title : Text;
    content : Text;
    steps : [TrainingStep];
    diagrams : [TrainingDiagram];
    safetyTips : [Text];
    exercises : [TrainingExercise];
    relatedAssets : [ID];
  };

  public type TrainingStep = {
    stepNumber : Nat;
    description : Text;
    checklistItems : [ChecklistItem];
    progress : Float;
  };

  public type ChecklistItem = {
    description : Text;
    completed : Bool;
  };

  public type TrainingDiagram = {
    id : Nat;
    title : Text;
    description : Text;
    assetId : ID;
    zoomLevel : Float;
    tooltips : [Tooltip];
  };

  public type Tooltip = {
    description : Text;
    position : (Float, Float);
  };

  public type TrainingExercise = {
    id : Nat;
    title : Text;
    description : Text;
    correctReading : Float;
    acceptableRange : (Float, Float);
    steps : [ExerciseStep];
    validationMethod : ValidationMethod;
  };

  public type ExerciseStep = {
    stepNumber : Nat;
    description : Text;
  };

  public type ValidationMethod = {
    #micronReading;
    #valveSetupOrder;
    #measurementEntry;
  };

  public type EpaCoreContent = {
    id : Nat;
    title : Text;
    content : Text;
    section : EpaSection;
    flashcards : [Flashcard];
    quiz : EpaQuiz;
    relatedAssets : [ID];
  };

  public type TypeIContent = {
    id : Nat;
    title : Text;
    content : Text;
    flashcards : [Flashcard];
    quiz : EpaQuiz;
    relatedAssets : [ID];
  };

  public type TypeIIContent = {
    id : Nat;
    title : Text;
    content : Text;
    flashcards : [Flashcard];
    quiz : EpaQuiz;
    relatedAssets : [ID];
  };

  public type TypeIIIContent = {
    id : Nat;
    title : Text;
    content : Text;
    flashcards : [Flashcard];
    quiz : EpaQuiz;
    relatedAssets : [ID];
  };

  public type UniversalContent = {
    id : Nat;
    title : Text;
    content : Text;
    flashcards : [Flashcard];
    quiz : EpaQuiz;
    relatedAssets : [ID];
  };

  public type EpaSection = {
    #core;
    #typeI;
    #typeII;
    #typeIII;
    #universal;
  };

  public type EpaQuiz = {
    questions : [EpaQuizQuestion];
    answerKey : [Text];
  };

  public type EpaQuizQuestion = {
    question : Text;
    options : [Text];
    correctAnswer : Text;
    explanation : Text;
    difficulty : QuestionDifficulty;
    section : EpaSection;
  };

  public type ExamSimulationResult = {
    score : Nat;
    passed : Bool;
    completed : Bool;
  };

  public type ProgressTracking = {
    modulesCompleted : [EpaSection];
    quizScores : [Nat];
    readinessRatings : [Nat];
    simulatedExams : [ExamSimulationResult];
    passThroughRate : Nat;
    currentSection : EpaSection;
    currentProgress : Nat;
  };

  public type ExamHistory = {
    completedExams : [ExamSimulationResult];
    averageScore : Nat;
    bestScore : Nat;
    lastCompletedSection : EpaSection;
  };

  public type StudyModuleContent = {
    id : Nat;
    title : Text;
    content : Text;
    section : EpaSection;
    flashcards : [Flashcard];
    quiz : Quiz;
    relatedAssets : [ID];
  };

  public type StudyProgress = {
    completedSections : [EpaSection];
    averageQuizScores : [Nat];
    streakCount : Nat;
    lastSectionCompleted : EpaSection;
  };

  public type DiagnosticAnalytics = {
    trendData : [TrendDataPoint];
    faultPatterns : [FaultPattern];
    performanceBenchmarks : [PerformanceBenchmark];
  };

  public type TrendDataPoint = {
    timestamp : Time.Time;
    metric : Text;
    value : Float;
  };

  public type FaultPattern = {
    faultType : Text;
    frequency : Nat;
    averageSeverity : Float;
  };

  public type PerformanceBenchmark = {
    metric : Text;
    userValue : Float;
    industryAverage : Float;
  };

  public type OfflineSession = {
    sessionId : ID;
    data : SessionResults;
    timestamp : Time.Time;
    synced : Bool;
  };

  public type TroubleshootingChatSession = {
    id : ID;
    userId : Principal;
    startedAt : Time.Time;
    lastUpdated : Time.Time;
    messages : [ChatMessage];
    currentStep : Nat;
    status : ChatSessionStatus;
    measurements : [MeasurementEntry];
    likelyCauses : [Text];
    recommendedActions : [Text];
    linkedResources : [ResourceLink];
    confidenceLevel : ?ConfidenceLevel;
    transcripts : [TranscriptEntry];
  };

  public type ChatMessage = {
    id : ID;
    sender : MessageSender;
    content : Text;
    timestamp : Time.Time;
    messageType : MessageType;
  };

  public type MessageSender = {
    #user;
    #assistant;
    #systemMessage;
  };

  public type MessageType = {
    #text;
    #diagnosticStep;
    #recommendation;
    #safetyAlert;
    #educationalTip;
    #question;
    #answer;
    #measurementEntry;
  };

  public type ChatSessionStatus = {
    #inProgress;
    #completed;
    #cancelled;
    #archived;
  };

  public type MeasurementEntry = {
    id : ID;
    type_ : MeasurementType;
    value : Float;
    units : Text;
    timestamp : Time.Time;
    source : MeasurementSource;
  };

  public type MeasurementType = {
    #temperature;
    #pressure;
    #superheat;
    #subcooling;
    #airflow;
    #electrical;
    #refrigerantWeight;
  };

  public type MeasurementSource = {
    #manual;
    #device;
    #voiceEntry;
  };

  public type ResourceLink = {
    id : ID;
    title : Text;
    url : Text;
    resourceType : ResourceType;
    description : Text;
  };

  public type ResourceType = {
    #lesson;
    #diagram;
    #calculator;
    #video;
    #article;
    #tool;
    #quiz;
  };

  public type TranscriptEntry = {
    id : ID;
    content : Text;
    timestamp : Time.Time;
    author : Text;
  };

  public type EpaExamQuestion = {
    id : ID;
    section : EpaSection;
    difficulty : QuestionDifficulty;
    question : Text;
    options : [Text];
    correctAnswer : Text;
    explanation : Text;
    regulatoryReference : Text;
    lessonLink : Text;
    topicCategory : Text;
  };

  public type ExamAttempt = {
    attemptId : ID;
    userId : Principal;
    section : EpaSection;
    startTime : Time.Time;
    endTime : ?Time.Time;
    questions : [ID];
    answers : [Text];
    score : ?Nat;
    passed : ?Bool;
    timeLimit : Nat;
    completed : Bool;
  };

  public type ExamSession = {
    sessionId : ID;
    userId : Principal;
    section : EpaSection;
    currentQuestionIndex : Nat;
    answers : [Text];
    startTime : Time.Time;
    allowBacktracking : Bool;
    timeRemaining : Nat;
  };

  public type VideoRecord = {
    id : ID;
    title : Text;
    category : VideoCategory;
    description : Text;
    url : Text;
    linkedLessonTopic : Text;
    duration : Nat;
    thumbnailUrl : Text;
  };

  public type VideoCategory = {
    #epaCore;
    #typeI;
    #typeII;
    #typeIII;
    #epaPlaylists;
    #hvacFundamentals;
    #diagnosticsMeasurements;
    #electricalControls;
    #refrigerantHandling;
    #toolsInstruments;
  };

  public type SupplierRecord = {
    id : ID;
    name : Text;
    category : SupplierCategory;
    city : Text;
    zipCode : Text;
    phone : Text;
    website : Text;
    distanceMiles : Float;
  };

  public type SupplierCategory = {
    #parts;
    #refrigerant;
    #tools;
    #wholesale;
  };

  public type UserSupplier = {
    id : ID;
    name : Text;
    location : Text;
    contact : Text;
    category : SupplierCategory;
    notes : Text;
    rating : Nat;
  };

  public type OnboardingScreen = {
    icon : Text;
    title : Text;
    description : Text;
  };

  public type OnboardingPayload = {
    screens : [OnboardingScreen];
  };

  public type Refrigerant = {
    name : Text;
    ashraeClass : Text;
    type_ : Text;
    gwp : Nat;
    odp : Float;
    glideF : Float;
    typicalEvapSatTempF : Float;
    evapPressure40Fpsig : Float;
    typicalCondSatTempF : Float;
    oilType : Text;
    chargingMethod : Text;
    a2lWarning : Bool;
    dewPointRule : Bool;
    bubblePointRule : Bool;
    typicalApplications : Text;
    notes : Text;
  };

  type RefrigerantFilter = {
    minGwp : ?Nat;
    maxGwp : ?Nat;
    minEvapPressure : ?Float;
    maxEvapPressure : ?Float;
    type_ : ?Text;
    hasA2lWarning : ?Bool;
  };

  // HELP SECTION TYPES (from backend)
  public type HelpMessage = {
    id : ID;
    sender : MessageSender;
    content : Text;
    timestamp : Time.Time;
    messageType : MessageType;
  };

  public type HelpSessionView = {
    id : ID;
    principal : Principal;
    startAt : Time.Time;
    lastUpdated : Time.Time;
    messages : [HelpMessage];
    status : ChatSessionStatus;
    followUps : [Text];
    confidenceLevel : ?ConfidenceLevel;
  };

  public type HelpSession = {
    id : ID;
    principal : Principal;
    startAt : Time.Time;
    lastUpdated : Time.Time;
    messages : List.List<HelpMessage>;
    status : ChatSessionStatus;
    followUps : List.List<Text>;
    confidenceLevel : ?ConfidenceLevel;
  };

  // ============================================================================
  // HELP SECTION AI QUESTION
  // ============================================================================
  // Add Message to Help Session (with rejection on non-existent session)
  public shared ({ caller }) func addHelpMessage(message : HelpMessage) : async () {
    // Accessible to all users including guests - no authorization check needed
    switch (helpSessions.get(caller)) {
      case (?session) {
        let updatedSession = {
          session with
          messages = session.messages;
          lastUpdated = Time.now();
        };
        helpSessions.add(caller, updatedSession);
      };
      case (null) { Runtime.trap("Session not found") };
    };
  };

  // Finish Help Session (by status = completed)
  public shared ({ caller }) func finishHelpSession() : async () {
    // Accessible to all users including guests - no authorization check needed
    switch (helpSessions.get(caller)) {
      case (?session) {
        let updatedSession = {
          session with
          status = #completed;
          lastUpdated = Time.now();
        };
        helpSessions.add(caller, updatedSession);
      };
      case (null) { Runtime.trap("Help session not ongoing") };
    };
  };

  // Get all Help Messages from current session (empty [] if no session found)
  public query ({ caller }) func getHelpMessages() : async [HelpMessage] {
    // Accessible to all users including guests - no authorization check needed
    switch (helpSessions.get(caller)) {
      case (?session) { session.messages.toArray() };
      case (null) { [] };
    };
  };

  // Get current messages in session (alias for getHelpMessages)
  public query ({ caller }) func getCurrentHelpMessages() : async [HelpMessage] {
    // Accessible to all users including guests - no authorization check needed
    switch (helpSessions.get(caller)) {
      case (?session) { session.messages.toArray() };
      case (null) { [] };
    };
  };

  // Get Follow Up Prompts (or [] on no session)
  public query ({ caller }) func getFollowUps() : async [Text] {
    // Accessible to all users including guests - no authorization check needed
    switch (helpSessions.get(caller)) {
      case (?session) { session.followUps.toArray() };
      case (null) { [] };
    };
  };

  // Get current Help Session
  public query ({ caller }) func getHelpSession() : async ?HelpSessionView {
    // Accessible to all users including guests - no authorization check needed
    switch (helpSessions.get(caller)) {
      case (?session) {
        ?{
          id = session.id;
          principal = session.principal;
          startAt = session.startAt;
          lastUpdated = session.lastUpdated;
          messages = session.messages.toArray();
          status = session.status;
          followUps = session.followUps.toArray();
          confidenceLevel = session.confidenceLevel;
        };
      };
      case (null) { null };
    };
  };

  // Start New Help Session (or resets old one)
  public shared ({ caller }) func startHelpSession() : async () {
    // Accessible to all users including guests - no authorization check needed
    let newId = genId();
    let session : HelpSession = {
      id = newId;
      principal = caller;
      startAt = Time.now();
      lastUpdated = Time.now();
      messages = List.empty<HelpMessage>();
      status = #inProgress;
      followUps = List.empty<Text>();
      confidenceLevel = null;
    };
    helpSessions.add(caller, session);
  };

  // Update Help Session including messages, followup prompts, and (optionally) confidence level
  public shared ({ caller }) func updateHelpSession(
    messagesToAdd : [HelpMessage],
    followupsToAdd : [Text],
  ) : async () {
    // Accessible to all users including guests - no authorization check needed
    switch (helpSessions.get(caller)) {
      case (?session) {
        let updatedSession = {
          session with
          lastUpdated = Time.now();
        };
        helpSessions.add(caller, updatedSession);
      };
      case (null) { Runtime.trap("There is no session ongoing") };
    };
  };

  // Clear ALL Help Messages for current user (returns empty array)
  public shared ({ caller }) func clearHelpMessages() : async () {
    // Accessible to all users including guests - no authorization check needed
    switch (helpSessions.get(caller)) {
      case (?session) {
        let updatedSession = {
          session with
          messages = List.empty<HelpMessage>();
          lastUpdated = Time.now();
        };
        helpSessions.add(caller, updatedSession);
      };
      case (null) {};
    };
  };

  // Clear Full Help Session (delete old session & empty messages array)
  public shared ({ caller }) func clearCurrentHelpSession() : async () {
    // Accessible to all users including guests - no authorization check needed
    helpSessions.remove(caller);
  };

  public shared ({ caller }) func initializeAccessControl() : async () {
    AccessControl.initialize(accessControlState, caller);
  };

  public query ({ caller }) func getCallerUserRole() : async AccessControl.UserRole {
    AccessControl.getUserRole(accessControlState, caller);
  };

  public shared ({ caller }) func assignCallerUserRole(user : Principal, role : AccessControl.UserRole) : async () {
    AccessControl.assignRole(accessControlState, caller, user, role);
  };

  public query ({ caller }) func isCallerAdmin() : async Bool {
    AccessControl.isAdmin(accessControlState, caller);
  };

  // ============================================================================
  // ONBOARDING WALKTHROUGH - Accessible to all users including guests
  // ============================================================================
  public query ({ caller }) func isWalkthroughCompleted() : async Bool {
    // Accessible to all users including guests - no authorization check needed
    switch (onboardingStatus.get(caller)) {
      case (?completed) { completed };
      case (null) { false };
    };
  };

  public shared ({ caller }) func markWalkthroughCompleted() : async () {
    // Accessible to all users including guests - no authorization check needed
    onboardingStatus.add(caller, true);
  };

  public query func getOnboardingPayload() : async OnboardingPayload {
    // Public read access - no authorization check needed
    {
      screens = [
        {
          icon = "dashboard";
          title = "Welcome to HVAC Buddy Pro";
          description = "Your complete toolkit for HVAC diagnostics, EPA certification prep, and field work management. Start from the dashboard to access all features.";
        },
        {
          icon = "diagnostic";
          title = "Diagnostics & Troubleshooter";
          description = "Get AI-powered diagnostic assistance and step-by-step troubleshooting guidance for any HVAC system issue.";
        },
        {
          icon = "study";
          title = "Study & Exams";
          description = "Master EPA 608 certification with comprehensive study modules, practice exams, and video tutorials.";
        },
        {
          icon = "jobs";
          title = "Jobs & Logging";
          description = "Manage customer jobs, log measurements, and generate professional service reports with photo documentation.";
        },
        {
          icon = "help";
          title = "Help & Videos";
          description = "Access expert help, educational videos, and community resources whenever you need assistance.";
        },
      ];
    };
  };

  // ============================================================================
  // ROBUST USER PROFILE INITIALIZATION
  // ============================================================================
  // Helper function to create default profile (internal use)
  func createDefaultUserProfile(caller : Principal) : UserProfile {
    let newProfile : UserProfile = {
      id = genId();
      name = "New User";
      company = "";
      certifications = [];
      experienceYears = 0;
      email = "";
      phone = "";
      progress = {
        completedChapters = [];
        masteryScore = 0;
      };
      studyMode = #beginner;
    };
    userProfiles.add(caller, newProfile);
    initializedUsers.add(caller, true);
    newProfile;
  };

  // Helper function to validate and complete existing profile (internal use)
  func validateUserProfile(caller : Principal, profile : UserProfile) : UserProfile {
    let completedProfile = {
      profile with
      certifications = if (profile.certifications.size() == 0) { [] } else {
        profile.certifications;
      };
      progress = profile.progress;
      studyMode = profile.studyMode;
    };
    userProfiles.add(caller, completedProfile);
    completedProfile;
  };

  // Initialize New User Profile with defaults (accessible to all users)
  public shared ({ caller }) func initializeUserProfile() : async () {
    // Accessible to all users including guests - no authorization check needed
    if (not userProfiles.containsKey(caller)) {
      ignore createDefaultUserProfile(caller);
    };
  };

  // Get (and auto-initialize) User Profile (accessible to all users)
  public query ({ caller }) func getUserProfile() : async UserProfile {
    // Accessible to all users including guests - no authorization check needed
    switch (userProfiles.get(caller)) {
      case (?profile) { validateUserProfile(caller, profile) };
      case (null) { createDefaultUserProfile(caller) };
    };
  };

  // Set User Profile (only owner can modify their own profile)
  public shared ({ caller }) func setUserProfile(profile : UserProfile) : async () {
    // Users can only modify their own profile - no explicit check needed as caller is the key
    // Auto-initialize if profile doesn't exist
    if (not userProfiles.containsKey(caller)) {
      ignore createDefaultUserProfile(caller);
    };
    userProfiles.add(caller, profile);
  };

  // Get All Users (admin only)
  public query ({ caller }) func getAllUsers() : async [UserProfile] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all users");
    };
    userProfiles.values().toArray();
  };

  // Remove User Profile (only owner can remove their own profile)
  public shared ({ caller }) func removeUserProfile() : async () {
    // Users can only remove their own profile - no explicit check needed as caller is the key
    userProfiles.remove(caller);
    initializedUsers.remove(caller);
  };

  // Get User Profile by Principal (admin only or self)
  public query ({ caller }) func getUserProfileByPrincipal(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile or admin access required");
    };
    userProfiles.get(user);
  };

  // Required by frontend: getCallerUserProfile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    // Accessible to all users including guests - no authorization check needed
    // Auto-initialize if doesn't exist
    switch (userProfiles.get(caller)) {
      case (?profile) { ?validateUserProfile(caller, profile) };
      case (null) { ?createDefaultUserProfile(caller) };
    };
  };

  // Required by frontend: saveCallerUserProfile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    // Users can only save their own profile - no explicit check needed as caller is the key
    // Auto-initialize if profile doesn't exist
    if (not userProfiles.containsKey(caller)) {
      ignore createDefaultUserProfile(caller);
    };
    userProfiles.add(caller, profile);
  };
};
