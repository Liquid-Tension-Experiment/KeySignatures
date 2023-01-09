document.getElementById("fifth-btn").addEventListener("click", cycleFifth);
document
  .getElementById("sharp-flat-natural")
  .addEventListener("click", backToC);
document.getElementById("fourth-btn").addEventListener("click", cycleFourth);
document
  .getElementById("relative-btn")
  .addEventListener("click", cycleRelative);
document
  .getElementById("parallel-btn")
  .addEventListener("click", cycleParallel);
window.addEventListener("DOMContentLoaded", startUp);

function cycleFifth(e) {
  const txt = document.getElementById("main-text");

  const keyIn = new KeySignature(`${txt.textContent}`);

  txt.textContent = checkName(keyIn.getFifth());

  const keyOut = new KeySignature(`${txt.textContent}`);

  console.log(txt.textContent);
  updateChordList(keyOut);

  e.preventDefault();
}

function cycleFourth(e) {
  const txt = document.getElementById("main-text");

  const keyIn = new KeySignature(`${txt.textContent}`);
  txt.textContent = checkName(keyIn.getFourth());

  const keyOut = new KeySignature(`${txt.textContent}`);

  console.log(txt.textContent);
  updateChordList(keyOut);

  e.preventDefault();
}

function cycleRelative(e) {
  const current = document.getElementById("main-text");
  const keysig = new KeySignature(`${current.textContent}`);

  current.textContent = checkName(`${keysig.getRelativeKey()}`);
  const keySigRel = new KeySignature(`${current.textContent}`);
  updateChordList(keySigRel);

  e.preventDefault();
}

function cycleParallel(e) {
  const current = document.getElementById("main-text");
  const keysig = new KeySignature(`${current.textContent}`);

  current.textContent = checkName(`${keysig.getParallelKey()}`);
  const keySigPar = new KeySignature(`${current.textContent}`);
  updateChordList(keySigPar);

  e.preventDefault();
}

function updateChordList(key) {
  const list = document.querySelectorAll("#chord");

  console.log(list);
  const ulArray = Array.from(list);
  console.log(key);

  const qualities = chordQualities[`${key.quality}`];
  console.log(qualities);

  const chordsArray = key.getChords();
  console.log(chordsArray);

  for (let i = 0; i < 7; i++) {
    const newArr = ulArray[i].children;
    console.log(newArr);

    const chordNotes = chordsArray[i].split(" ");

    newArr[0].textContent = qualities[i];
    newArr[1].textContent = chordNotes[0];
    newArr[2].textContent = chordNotes[1];
    newArr[3].textContent = chordNotes[2];
    newArr[4].textContent = chordNotes[3];
  }

  // for (let i = 0; i < 7; i++) {
  //   const chord = ulArray[i].children;
  //   let chordAsArray = Array.from(chord);
  //   chordAsArray[0].textContent = qualities[i];
  //   chordAsArray.shift();

  //   chordAsArray.forEach(function (chord) {
  //     if (!chord.classList.contains(".hidden")) {
  //       console.log(chord.textContent);
  //       chord.textContent = chord;
  //       console.log(chord.textContent);
  //     }
  //   });
  // }

  // liArray.forEach(function (li, index) {
  //   li.innerHTML = `${qualities[index]} - ${chordsArray[index]}`;
  // });
}

function startUp() {
  keysig1 = new KeySignature("C Major");
  updateChordList(keysig1);
}

function backToC() {
  keysig = new KeySignature("C Major");
  document.getElementById("main-text").textContent = "C Major";
  updateChordList(keysig);
}
