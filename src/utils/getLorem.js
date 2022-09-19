import {LoremIpsum} from "lorem-ipsum"
const getLorem = ({type,count}) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  if(type === "paragraphs") return lorem.generateParagraphs(count)
  if(type === "sentences") return lorem.generateSentences(count)
  if(type === "words") return lorem.generateWords(count)
};


export default getLorem



