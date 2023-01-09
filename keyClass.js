const keyNotes = {
  "C Major": ["C", "D", "E", "F", "G", "A", "B"],
  "A Minor": ["A", "B", "C", "D", "E", "F", "G"],

  "G Major": ["G", "A", "B", "C", "D", "E", "F#"],
  "E Minor": ["E", "F#", "G", "A", "B", "C", "D"],

  "D Major": ["D", "E", "F#", "G", "A", "B", "C#"],
  "B Minor": ["B", "C#", "D", "E", "F#", "G", "A"],

  "A Major": ["A", "B", "C#", "D", "E", "F#", "G#"],
  "F# Minor": ["F#", "G#", "A", "B", "C#", "D", "E"],

  "E Major": ["E", "F#", "G#", "A", "B", "C#", "D#"],
  "C# Minor": ["C#", "D#", "E", "F#", "G#", "A", "B"],

  "B Major": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  "G# Minor": ["G", "A", "B", "C#", "D", "E", "F#"],

  "Gb Major": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  "Eb Minor": ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],

  "Db Major": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  "Bb Minor": ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],

  "Ab Major": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  "F Minor": ["F", "G", "Ab", "B", "C", "Db", "Eb"],

  "Eb Major": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  "C Minor": ["C", "D", "Eb", "F", "G", "Ab", "Bb"],

  "Bb Major": ["Bb", "C", "D", "Eb", "F", "G", "A"],
  "G Minor": ["G", "A", "B", "C", "D", "Eb", "F"],

  "F Major": ["F", "G", "A", "Bb", "C", "D", "E"],
  "D Minor": ["D", "E", "F", "G", "A", "Bb", "C"],
};

const chordQualities = {
  // ° = Alt + 248
  Major: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
  Minor: ["i", "ii", "III", "iv", "v", "VI", "VII"],
};

class KeySignature {
  constructor(name) {
    this.name = name;
    this.quality = this.name.split(" ")[1];
    this.notes = keyNotes[`${name}`];
    //this.fourth = `${this.notes[3]} ${this.quality}`;
    //this.fifth = `${this.notes[4]} ${this.quality}`;
  }

  getChords() {
    let chords = [];

    for (let i = 0; i < 7; i++) {
      let triad = "";
      triad += String(this.notes[(i + 0) % 7]);
      triad += " ";
      triad += String(this.notes[(i + 2) % 7]);
      triad += " ";
      triad += String(this.notes[(i + 4) % 7]);
      triad += " ";
      triad += String(this.notes[(i + 6) % 7]);
      chords[i] = triad;
    }
    return chords;
  }

  getRelativeKey() {
    return this.quality === "Major"
      ? this.notes[5] + " Minor"
      : this.notes[2] + " Major";
  }

  getParallelKey() {
    return this.quality === "Major"
      ? this.notes[0] + " Minor"
      : this.notes[0] + " Major";
  }

  getFifth() {
    return `${this.notes[4]} ${this.quality}`;
  }
  getFourth() {
    return `${this.notes[3]} ${this.quality}`;
  }
}

function checkName(name) {
  if (name === "C# Major") {
    return "Db Major";
  } else if (name === "F# Major") {
    return "Gb Major";
  } else if (name === "A# Minor") {
    return "Bb Minor";
  } else if (name === "D# Minor") {
    return "Eb Minor";
  } else if (name === "D# Major") {
    return "Eb Major";
  } else if (name === "Cb Major") {
    return "B Major";
  } else if (name === "Gb Minor") {
    return "F# Minor";
  } else if (name === "Db Minor") {
    return "C# Minor";
  } else if (name === "Ab Minor") {
    return "G# Minor";
  } else if (name === "G# Major") {
    return "Ab Major";
  } else {
    return name;
  }
}

const cMaj = new KeySignature("A Minor");

// console.log(cMaj);
// console.log(cMaj.notes);
// console.log(cMaj.getChords());
// console.log(cMaj.getRelativeKey());
// console.log(cMaj.getParallelKey());
// console.log("°");
