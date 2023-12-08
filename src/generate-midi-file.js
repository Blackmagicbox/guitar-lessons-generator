import MidiWriter from "midi-writer-js";
import * as fs from "fs";

/**
 *
 * @param name String
 * @param notes String[]
 */
export const GenerateMidiFile = (name, notes) => {
  console.log("Have I been called?");

  const track = new MidiWriter.Track();

  track.setTempo(120);

  for (const note of notes) {
    track.addEvent(new MidiWriter.NoteEvent({
      pitch: note[0],
      duration: note[1]
    }));
  }

  const write = new MidiWriter.Writer(track);
  console.log(`${write.dataUri()}`);

  fs.writeFile(getFileName(name), write.buildFile(), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

}


const getFileName = (name) => {
  return `${name}.mid`;
}

