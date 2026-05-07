const questions = [
  {
    type: "Listen and Repeat",
    title: "Question 1",
    prompt: "Listen to the sentence. Then repeat it exactly as you hear it.",
    audio: ["audio/q1.mp3", "audio/D12_1.mp3"],
    prep: 3,
    response: 12,
  },
  {
    type: "Listen and Repeat",
    title: "Question 2",
    prompt: "Listen to the sentence. Then repeat it exactly as you hear it.",
    audio: ["audio/q2.mp3", "audio/D12_2.mp3"],
    prep: 3,
    response: 12,
  },
  {
    type: "Listen and Repeat",
    title: "Question 3",
    prompt: "Listen to the sentence. Then repeat it exactly as you hear it.",
    audio: ["audio/q3.mp3", "audio/D12_3.mp3"],
    prep: 3,
    response: 12,
  },
  {
    type: "Listen and Repeat",
    title: "Question 4",
    prompt: "Listen to the sentence. Then repeat it exactly as you hear it.",
    audio: ["audio/q4.mp3", "audio/D12_4.mp3"],
    prep: 3,
    response: 12,
  },
  {
    type: "Listen and Repeat",
    title: "Question 5",
    prompt: "Listen to the sentence. Then repeat it exactly as you hear it.",
    audio: ["audio/q5.mp3", "audio/D11_5.mp3"],
    prep: 3,
    response: 12,
  },
  {
    type: "Listen and Repeat",
    title: "Question 6",
    prompt: "Listen to the sentence. Then repeat it exactly as you hear it.",
    audio: ["audio/q6.mp3", "audio/D11_6.mp3"],
    prep: 3,
    response: 12,
  },
  {
    type: "Take an Interview",
    set: 1,
    title: "Interview Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q7-1.wav", "audio/q7-1.mp3.wav", "audio/q7_1.wav", "audio/q7-1.mp3", "audio/q7_1.mp3"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 1,
    title: "Interview Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q7-2.wav", "audio/q7-2.mp3.wav", "audio/q7_2.wav", "audio/q7-2.mp3", "audio/q7_2.mp3"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 1,
    title: "Interview Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q7-3.wav", "audio/q7-3.mp3.wav", "audio/q7_3.wav", "audio/q7-3.mp3", "audio/q7_3.mp3"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 1,
    title: "Interview Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q7-4.wav", "audio/q7-4.mp3.wav", "audio/q7_4.wav", "audio/q7-4.mp3", "audio/q7_4.mp3"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 2,
    title: "Interview 2 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q8-1.wav", "audio/q8_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 2,
    title: "Interview 2 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q8-2.wav", "audio/q8_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 2,
    title: "Interview 2 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q8-3.wav", "audio/q8_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 2,
    title: "Interview 2 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q8-4.wav", "audio/q8_4.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 3,
    title: "Interview 3 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q9-1.wav", "audio/q9_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 3,
    title: "Interview 3 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q9-2.wav", "audio/q9_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 3,
    title: "Interview 3 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q9-3.wav", "audio/q9_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 3,
    title: "Interview 3 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q9-4.wav", "audio/q9_4.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 4,
    title: "Interview 4 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q10-1.wav", "audio/q10_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 4,
    title: "Interview 4 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q10-2.wav", "audio/q10_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 4,
    title: "Interview 4 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q10-3.wav", "audio/q10_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 4,
    title: "Interview 4 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q10-4.wav", "audio/q10_4.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 5,
    title: "Interview 5 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q11-1.wav", "audio/q11_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 5,
    title: "Interview 5 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q11-2.wav", "audio/q11_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 5,
    title: "Interview 5 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q11-3.wav", "audio/q11_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 5,
    title: "Interview 5 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q11-4.wav", "audio/q11_4.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 6,
    title: "Interview 6 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q12-1.wav", "audio/q12_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 6,
    title: "Interview 6 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q12-2.wav", "audio/q12_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 6,
    title: "Interview 6 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q12-3.wav", "audio/q12_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 6,
    title: "Interview 6 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q12-4.wav", "audio/q12_4.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 7,
    title: "Interview 7 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q13-1.wav", "audio/q13_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 7,
    title: "Interview 7 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q13-2.wav", "audio/q13_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 7,
    title: "Interview 7 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q13-3.wav", "audio/q13_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 7,
    title: "Interview 7 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q13-4.wav", "audio/q13_4.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 8,
    title: "Interview 8 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q14-1.wav", "audio/q14_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 8,
    title: "Interview 8 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q14-2.wav", "audio/q14_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 8,
    title: "Interview 8 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q14-3.wav", "audio/q14_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 8,
    title: "Interview 8 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q14-4.wav", "audio/q14_4.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 9,
    title: "Interview 9 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q15-1.wav", "audio/q15_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 9,
    title: "Interview 9 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q15-2.wav", "audio/q15_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 9,
    title: "Interview 9 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q15-3.wav", "audio/q15_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 9,
    title: "Interview 9 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q15-4.wav", "audio/q15_4.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 10,
    title: "Interview 10 Question 1",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q16-1.wav", "audio/q16_1.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 10,
    title: "Interview 10 Question 2",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q16-2.wav", "audio/q16_2.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 10,
    title: "Interview 10 Question 3",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q16-3.wav", "audio/q16_3.wav"],
    prep: 0,
    response: 45,
  },
  {
    type: "Take an Interview",
    set: 10,
    title: "Interview 10 Question 4",
    prompt: "Listen to the interview question. Then give your answer.",
    audio: ["audio/q16-4.wav", "audio/q16_4.wav"],
    prep: 0,
    response: 45,
  },
];

const introView = document.querySelector("#introView");
const testView = document.querySelector("#testView");
const resultsView = document.querySelector("#resultsView");
const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restartBtn");
const playBtn = document.querySelector("#playBtn");
const recordBtn = document.querySelector("#recordBtn");
const nextBtn = document.querySelector("#nextBtn");
const reviewBtn = document.querySelector("#reviewBtn");
const questionCount = document.querySelector("#questionCount");
const timer = document.querySelector("#timer");
const largeTimer = document.querySelector("#largeTimer");
const timerMode = document.querySelector("#timerMode");
const progressBar = document.querySelector("#progressBar");
const taskType = document.querySelector("#taskType");
const phaseLabel = document.querySelector("#phaseLabel");
const promptTitle = document.querySelector("#promptTitle");
const promptText = document.querySelector("#promptText");
const promptAudioPlayer = document.querySelector("#promptAudioPlayer");
const hintText = document.querySelector("#hintText");
const recordingsView = document.querySelector("#recordings");
const averageScore = document.querySelector("#averageScore");
const currentRecording = document.querySelector("#currentRecording");
const currentAudio = document.querySelector("#currentAudio");
const currentDownloadBtn = document.querySelector("#currentDownloadBtn");
const currentRecordingStatus = document.querySelector("#currentRecordingStatus");
const questionSelect = document.querySelector("#questionSelect");
const setRecordings = document.querySelector("#setRecordings");
const setRecordingsTitle = document.querySelector("#setRecordingsTitle");
const setRecordingsSummary = document.querySelector("#setRecordingsSummary");
const setRecordingsList = document.querySelector("#setRecordingsList");
const speechNotes = document.querySelector("#speechNotes");
const speechNotesStatus = document.querySelector("#speechNotesStatus");
const liveTranscript = document.querySelector("#liveTranscript");

let current = 0;
let countdown = null;
let mediaRecorder = null;
let stream = null;
let chunks = [];
let recordings = [];
let scores = [];
let phase = "ready";
let promptAudio = promptAudioPlayer;
let speechRecognition = null;
let transcriptFinal = "";
let transcriptInterim = "";

function speechRecognitionConstructor() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function currentTranscript() {
  return `${transcriptFinal} ${transcriptInterim}`.trim();
}

function updateLiveTranscript() {
  const text = currentTranscript();
  liveTranscript.textContent = text || "Listening for your answer...";
}

function startSpeechNotes() {
  transcriptFinal = "";
  transcriptInterim = "";
  speechNotes.classList.remove("hidden");
  updateLiveTranscript();

  const Recognition = speechRecognitionConstructor();
  if (!Recognition) {
    speechNotesStatus.textContent = "Speech notes are not supported in this browser.";
    return;
  }

  speechRecognition = new Recognition();
  speechRecognition.lang = "en-US";
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.onstart = () => {
    speechNotesStatus.textContent = "Taking notes while you speak.";
  };
  speechRecognition.onresult = (event) => {
    transcriptInterim = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const text = event.results[index][0].transcript.trim();
      if (event.results[index].isFinal) {
        transcriptFinal = `${transcriptFinal} ${text}`.trim();
      } else {
        transcriptInterim = `${transcriptInterim} ${text}`.trim();
      }
    }
    updateLiveTranscript();
  };
  speechRecognition.onerror = () => {
    speechNotesStatus.textContent = "Speech notes stopped. Your audio recording is still saved.";
  };
  speechRecognition.onend = () => {
    if (phase === "recording") {
      try {
        speechRecognition.start();
      } catch {
        speechNotesStatus.textContent = "Speech notes paused. Keep speaking for the audio recording.";
      }
    }
  };

  try {
    speechRecognition.start();
  } catch {
    speechNotesStatus.textContent = "Speech notes could not start.";
  }
}

function stopSpeechNotes() {
  if (speechRecognition) {
    speechRecognition.onend = null;
    try {
      speechRecognition.stop();
    } catch {
      // Speech recognition may already be stopped.
    }
  }
  speechNotesStatus.textContent = currentTranscript() ? "Notes saved with this take." : "No speech notes captured.";
}

function recordingAttempts(index) {
  return Array.isArray(recordings[index]) ? recordings[index] : [];
}

function latestRecording(index) {
  const attempts = recordingAttempts(index);
  return attempts[attempts.length - 1] || null;
}

function addRecording(index, recording) {
  if (!Array.isArray(recordings[index])) {
    recordings[index] = [];
  }
  recordings[index].push(recording);
  return recordings[index].length;
}

async function downloadRecording(index, recording, attemptNumber = 1) {
  const filename = `toefl-speaking-${String(index + 1).padStart(2, "0")}-take-${String(attemptNumber).padStart(2, "0")}.webm`;

  if (window.showSaveFilePicker) {
    const handle = await window.showSaveFilePicker({
      suggestedName: filename,
      types: [
        {
          description: "WebM audio",
          accept: { "audio/webm": [".webm"] },
        },
      ],
    });
    const writable = await handle.createWritable();
    await writable.write(recording.blob);
    await writable.close();
    return "chosen-location";
  }

  const link = document.createElement("a");
  link.href = recording.url;
  link.download = filename;
  link.style.display = "none";
  document.body.append(link);
  link.click();
  link.remove();
  return "downloads-folder";
}

function show(view) {
  [introView, testView, resultsView].forEach((section) => section.classList.add("hidden"));
  view.classList.remove("hidden");
}

function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  return `00:${String(safe).padStart(2, "0")}`;
}

function stopPromptAudio() {
  promptAudio.pause();
  promptAudio.currentTime = 0;
  window.speechSynthesis.cancel();
}

function audioSources(item) {
  return Array.isArray(item.audio) ? item.audio : [item.audio].filter(Boolean);
}

function playNativeAudio(item) {
  return new Promise((resolve, reject) => {
    const sources = audioSources(item);
    if (!sources.length) {
      reject(new Error("No audio file"));
      return;
    }

    let index = 0;
    const tryNext = () => {
      if (index >= sources.length) {
        reject(new Error("No playable audio file"));
        return;
      }

      stopPromptAudio();
      promptAudio = promptAudioPlayer;
      promptAudio.classList.remove("hidden");
      promptAudio.src = `${sources[index]}?v=${Date.now()}`;
      promptAudio.load();
      index += 1;
      promptAudio.onended = resolve;
      promptAudio.onerror = tryNext;
      promptAudio.play().catch(tryNext);
    };

    tryNext();
  });
}

function updateQuestion() {
  const item = questions[current];
  questionCount.textContent = `${current + 1} / ${questions.length}`;
  questionSelect.value = String(current);
  timer.textContent = "--:--";
  largeTimer.textContent = "--:--";
  timerMode.textContent = "Ready";
  progressBar.style.width = "0%";
  taskType.textContent = item.type;
  phaseLabel.textContent = "Ready";
  promptTitle.textContent = item.title;
  promptText.textContent =
    item.type === "Listen and Repeat"
      ? "Listen to the audio. Then repeat the sentence exactly as you hear it."
      : "Listen to the interviewer's question. Then answer naturally and clearly.";
  hintText.textContent =
    item.type === "Listen and Repeat"
      ? "Play Prompt를 누르면 원어민 음원 파일이 재생됩니다."
      : "Play Prompt를 누르면 인터뷰 음원 파일이 재생됩니다.";
  playBtn.disabled = false;
  recordBtn.disabled = false;
  nextBtn.disabled = false;
  recordBtn.textContent = "Record Answer";
  recordBtn.classList.remove("recording");
  currentRecording.classList.add("hidden");
  promptAudioPlayer.classList.add("hidden");
  promptAudioPlayer.removeAttribute("src");
  currentAudio.removeAttribute("src");
  currentRecordingStatus.textContent = "Ready to review.";
  speechNotes.classList.add("hidden");
  liveTranscript.textContent = "Your spoken answer will appear here while recording.";
  speechNotesStatus.textContent = "Speech notes are ready.";
  phase = "ready";
  updateQuestionMenu();
  renderSetRecordings();
}

function questionLabel(item, index) {
  const count = recordingAttempts(index).length;
  const saved = count ? ` - ${count} takes` : "";
  const label =
    item.type === "Take an Interview"
      ? `Question ${interviewQuestionNumber(item, index)}`
      : `Q${index + 1}`;
  return `${label} · ${item.type}${saved}`;
}

function interviewQuestionNumber(item, index) {
  if (item.type !== "Take an Interview") return index + 1;
  const setItems = questions.filter((question) => question.type === "Take an Interview" && question.set === item.set);
  return setItems.indexOf(item) + 1;
}

function updateQuestionMenu() {
  questionSelect.innerHTML = "";
  const listenGroup = document.createElement("optgroup");
  listenGroup.label = "Listen and Repeat";
  const interviewGroups = new Map();

  questions.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = questionLabel(item, index);
    if (item.type === "Take an Interview") {
      if (!interviewGroups.has(item.set)) {
        const group = document.createElement("optgroup");
        group.label = `Take an Interview ${item.set}`;
        interviewGroups.set(item.set, group);
      }
      interviewGroups.get(item.set).append(option);
    } else {
      listenGroup.append(option);
    }
  });
  questionSelect.append(listenGroup, ...interviewGroups.values());
  questionSelect.value = String(current);
}

function goToQuestion(index) {
  stopPromptAudio();
  clearInterval(countdown);
  if (mediaRecorder?.state === "recording") stopRecording();
  current = index;
  updateQuestion();
  if (latestRecording(current)) showCurrentRecording(current);
  renderSetRecordings();
}

function currentRecordingIndexes() {
  const item = questions[current];
  if (item.type === "Take an Interview") {
    return questions
      .map((question, index) => ({ question, index }))
      .filter((entry) => entry.question.type === "Take an Interview" && entry.question.set === item.set)
      .map((entry) => entry.index);
  }

  return questions
    .map((question, index) => ({ question, index }))
    .filter((entry) => entry.question.type === "Listen and Repeat")
    .map((entry) => entry.index);
}

function recordingShortLabel(index) {
  const item = questions[index];
  if (item.type === "Take an Interview") {
    return `Question ${interviewQuestionNumber(item, index)}`;
  }
  return `Q${index + 1}`;
}

function renderSetRecordings() {
  const item = questions[current];
  const indexes = currentRecordingIndexes();
  const recordedIndexes = indexes.filter((index) => recordingAttempts(index).length > 0);

  setRecordings.classList.remove("hidden");
  setRecordingsTitle.textContent =
    item.type === "Take an Interview" ? `Take an Interview ${item.set} recordings` : "Listen and Repeat recordings";
  setRecordingsSummary.textContent = `${recordedIndexes.length} / ${indexes.length} recorded`;
  setRecordingsList.innerHTML = "";

  indexes.forEach((index) => {
    const row = document.createElement("div");
    row.className = "set-recording-row";

    const label = document.createElement("strong");
    label.textContent = recordingShortLabel(index);

    const audioWrap = document.createElement("div");
    const actionWrap = document.createElement("div");

    const attempts = recordingAttempts(index);
    if (attempts.length) {
      const stack = document.createElement("div");
      stack.className = "attempt-stack";
      const actionStack = document.createElement("div");
      actionStack.className = "attempt-stack";

      attempts.forEach((recording, attemptIndex) => {
        const attemptRow = document.createElement("div");
        attemptRow.className = "attempt-row";
        const attemptLabel = document.createElement("span");
        attemptLabel.textContent = `Take ${attemptIndex + 1}`;
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = recording.url;
        attemptRow.append(attemptLabel, audio);
        if (recording.transcript) {
          const note = document.createElement("details");
          note.className = "attempt-note";
          const summary = document.createElement("summary");
          summary.textContent = "Notes";
          const noteText = document.createElement("p");
          noteText.textContent = recording.transcript;
          note.append(summary, noteText);
          attemptRow.append(note);
        }
        stack.append(attemptRow);

        const download = document.createElement("button");
        download.className = "save-button";
        download.type = "button";
        download.textContent = `Download ${attemptIndex + 1}`;
        download.addEventListener("click", async () => {
          download.disabled = true;
          download.textContent = "Working";
          try {
            await downloadRecording(index, recording, attemptIndex + 1);
            download.textContent = "Downloaded";
          } catch {
            download.disabled = false;
            download.textContent = "Retry";
          }
        });
        actionStack.append(download);
      });

      audioWrap.append(stack);
      actionWrap.append(actionStack);
    } else {
      const empty = document.createElement("span");
      empty.textContent = "No recording yet";
      audioWrap.append(empty);

      const disabled = document.createElement("span");
      disabled.className = "save-button disabled";
      disabled.textContent = "Download";
      actionWrap.append(disabled);
    }

    row.append(label, audioWrap, actionWrap);
    setRecordingsList.append(row);
  });
}

function runTimer(seconds, label, done) {
  clearInterval(countdown);
  if (seconds <= 0) {
    progressBar.style.width = "0%";
    done?.();
    return;
  }
  let remaining = seconds;
  phaseLabel.textContent = label;
  timerMode.textContent = label;
  timer.textContent = formatTime(remaining);
  largeTimer.textContent = formatTime(remaining);
  progressBar.style.width = "0%";
  countdown = setInterval(() => {
    remaining -= 1;
    timer.textContent = formatTime(remaining);
    largeTimer.textContent = formatTime(remaining);
    progressBar.style.width = `${((seconds - remaining) / seconds) * 100}%`;
    if (remaining <= 0) {
      clearInterval(countdown);
      done?.();
    }
  }, 1000);
}

async function ensureRecorder() {
  if (stream) return;
  stream = await navigator.mediaDevices.getUserMedia({ audio: true });
}

async function startRecording() {
  const recordingIndex = current;
  const item = questions[recordingIndex];
  await ensureRecorder();
  chunks = [];
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) chunks.push(event.data);
  };
  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: "audio/webm" });
    const attemptNumber = addRecording(recordingIndex, {
      blob,
      url: URL.createObjectURL(blob),
      title: item.title,
      type: item.type,
      prompt: item.type === "Listen and Repeat" ? "Listen and Repeat prompt audio" : item.prompt,
      transcript: currentTranscript(),
    });
    if (recordingIndex === current) {
      showCurrentRecording(recordingIndex, attemptNumber);
    }
    updateQuestionMenu();
    renderSetRecordings();
  };
  phase = "recording";
  mediaRecorder.start();
  startSpeechNotes();
  recordBtn.textContent = "Stop Recording";
  recordBtn.classList.add("recording");
  hintText.textContent = "Recording now. Speak clearly and keep a natural pace.";
  runTimer(item.response, "Response", stopRecording);
}

function stopRecording() {
  clearInterval(countdown);
  stopSpeechNotes();
  if (mediaRecorder?.state === "recording") {
    mediaRecorder.stop();
  }
  phase = "review";
  recordBtn.textContent = "Record Again";
  recordBtn.classList.remove("recording");
  phaseLabel.textContent = "Saved";
  timerMode.textContent = "Saved";
  timer.textContent = "00:00";
  largeTimer.textContent = "00:00";
  progressBar.style.width = "100%";
  hintText.textContent = "Saved. 다음 문항으로 가거나 다시 녹음할 수 있습니다.";
}

function showCurrentRecording(index, attemptNumber = recordingAttempts(index).length) {
  const recording = latestRecording(index);
  if (!recording) return;
  currentAudio.src = recording.url;
  currentRecordingStatus.textContent = `Take ${attemptNumber} saved. You can listen again or download it now.`;
  currentDownloadBtn.disabled = false;
  currentDownloadBtn.textContent = "Download";
  currentRecording.classList.remove("hidden");
}

function playPrompt() {
  const item = questions[current];
  stopPromptAudio();
  if (mediaRecorder?.state === "recording") stopRecording();
  phase = "listening";
  phaseLabel.textContent = "Listening";
  hintText.textContent = "Playing prompt audio. Listen carefully.";
  playNativeAudio(item)
    .then(() => {
      const startResponse = () => {
        phaseLabel.textContent = item.type === "Take an Interview" ? "45 sec response" : "Recording";
        hintText.textContent =
          item.type === "Take an Interview"
            ? "45-second answer timer started. Speak clearly and naturally."
            : "Recording started. Speak clearly and keep a natural pace.";
        startRecording().catch(() => {
          phaseLabel.textContent = "Mic permission needed";
          hintText.textContent = "마이크 권한을 허용한 뒤 Record Answer를 눌러 녹음을 시작하세요.";
        });
      };
      runTimer(item.prep, item.prep > 0 ? "Prepare" : "Ready", startResponse);
    })
    .catch(() => {
      hintText.textContent =
        "해당 문항의 mp3 파일을 찾지 못했습니다. audio 폴더의 파일명을 확인해 주세요.";
      phaseLabel.textContent = "Audio missing";
      timerMode.textContent = "Audio missing";
      timer.textContent = "--:--";
      largeTimer.textContent = "--:--";
      progressBar.style.width = "0%";
    });
}

function nextQuestion() {
  stopPromptAudio();
  clearInterval(countdown);
  if (mediaRecorder?.state === "recording") stopRecording();
  if (current < questions.length - 1) {
    current += 1;
    updateQuestion();
  } else {
    renderResults();
  }
}

function scoreOptions(index) {
  const select = document.createElement("select");
  select.setAttribute("aria-label", `${questions[index].title} score`);
  select.innerHTML = `
    <option value="">Score</option>
    <option value="6">6.0</option>
    <option value="5.5">5.5</option>
    <option value="5">5.0</option>
    <option value="4.5">4.5</option>
    <option value="4">4.0</option>
    <option value="3.5">3.5</option>
    <option value="3">3.0</option>
    <option value="2.5">2.5</option>
    <option value="2">2.0</option>
    <option value="1.5">1.5</option>
    <option value="1">1.0</option>
  `;
  select.addEventListener("change", () => {
    scores[index] = Number(select.value) || null;
    updateAverage();
  });
  return select;
}

function updateAverage() {
  const valid = scores.filter(Boolean);
  if (!valid.length) {
    averageScore.textContent = "--";
    return;
  }
  const raw = valid.reduce((sum, score) => sum + score, 0) / valid.length;
  const rounded = Math.round(raw * 2) / 2;
  averageScore.textContent = rounded.toFixed(1);
}

function renderResults() {
  show(resultsView);
  questionCount.textContent = `${questions.length} / ${questions.length}`;
  timer.textContent = "Done";
  largeTimer.textContent = "Done";
  timerMode.textContent = "Review";
  recordingsView.innerHTML = "";
  questions.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "recording-row";
    const info = document.createElement("div");
    const reviewPrompt =
      latestRecording(index)?.prompt ||
      (item.type === "Listen and Repeat" ? "Listen and Repeat prompt audio" : "Interview question audio");
    info.innerHTML = `<h3>${item.title} · ${item.type}</h3><p>${reviewPrompt}</p>`;
    const audioWrap = document.createElement("div");
    const downloadWrap = document.createElement("div");
    const status = document.createElement("div");
    status.className = "download-status";
    const attempts = recordingAttempts(index);
    if (attempts.length) {
      const audioStack = document.createElement("div");
      audioStack.className = "attempt-stack";
      const downloadStack = document.createElement("div");
      downloadStack.className = "attempt-stack";
      attempts.forEach((recording, attemptIndex) => {
        const attemptRow = document.createElement("div");
        attemptRow.className = "attempt-row";
        const attemptLabel = document.createElement("span");
        attemptLabel.textContent = `Take ${attemptIndex + 1}`;
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = recording.url;
        attemptRow.append(attemptLabel, audio);
        if (recording.transcript) {
          const note = document.createElement("details");
          note.className = "attempt-note";
          const summary = document.createElement("summary");
          summary.textContent = "Notes";
          const noteText = document.createElement("p");
          noteText.textContent = recording.transcript;
          note.append(summary, noteText);
          attemptRow.append(note);
        }
        audioStack.append(attemptRow);

        const download = document.createElement("button");
        download.className = "save-button";
        download.type = "button";
        download.textContent = `Download ${attemptIndex + 1}`;
        download.addEventListener("click", async () => {
          download.disabled = true;
          download.textContent = "Working";
          status.textContent = "Preparing file...";
          try {
            const result = await downloadRecording(index, recording, attemptIndex + 1);
            download.textContent = "Downloaded";
            status.textContent =
              result === "chosen-location"
                ? "Saved to the folder you selected."
                : "Download started. Check your Downloads folder.";
          } catch (error) {
            download.disabled = false;
            download.textContent = "Retry";
            status.textContent = "Download was blocked or cancelled. Please try again.";
          }
        });
        downloadStack.append(download);
      });
      audioWrap.append(audioStack);
      downloadWrap.append(downloadStack);
    } else {
      audioWrap.innerHTML = "<p>No recording</p>";
      const disabled = document.createElement("span");
      disabled.className = "save-button disabled";
      disabled.textContent = "Download";
      status.textContent = "Record an answer first.";
      downloadWrap.append(disabled);
    }
    row.append(info, audioWrap, downloadWrap, status, scoreOptions(index));
    recordingsView.append(row);
  });
  updateAverage();
}

function openReview() {
  stopPromptAudio();
  clearInterval(countdown);
  if (mediaRecorder?.state === "recording") stopRecording();
  renderResults();
}

startBtn.addEventListener("click", () => {
  current = 0;
  recordings = [];
  scores = [];
  show(testView);
  updateQuestionMenu();
  updateQuestion();
});

restartBtn.addEventListener("click", () => {
  current = 0;
  recordings = [];
  scores = [];
  show(introView);
  questionCount.textContent = `0 / ${questions.length}`;
  timer.textContent = "--:--";
  largeTimer.textContent = "--:--";
  timerMode.textContent = "Ready";
});

playBtn.addEventListener("click", playPrompt);

recordBtn.addEventListener("click", async () => {
  try {
    if (phase === "recording") {
      stopRecording();
    } else {
      await startRecording();
    }
  } catch {
    hintText.textContent = "마이크 권한을 허용해야 녹음할 수 있습니다.";
  }
});

nextBtn.addEventListener("click", nextQuestion);
questionSelect.addEventListener("change", () => {
  goToQuestion(Number(questionSelect.value));
});
reviewBtn.addEventListener("click", openReview);
currentDownloadBtn.addEventListener("click", async () => {
  const recording = latestRecording(current);
  if (!recording) return;
  const attemptNumber = recordingAttempts(current).length;
  currentDownloadBtn.disabled = true;
  currentDownloadBtn.textContent = "Working";
  currentRecordingStatus.textContent = "Preparing file...";
  try {
    const result = await downloadRecording(current, recording, attemptNumber);
    currentDownloadBtn.textContent = "Downloaded";
    currentRecordingStatus.textContent =
      result === "chosen-location"
        ? "Saved to the folder you selected."
        : "Download started. Check your Downloads folder.";
  } catch {
    currentDownloadBtn.disabled = false;
    currentDownloadBtn.textContent = "Retry";
    currentRecordingStatus.textContent = "Download was blocked or cancelled. Please try again.";
  }
});

questionCount.textContent = `0 / ${questions.length}`;
