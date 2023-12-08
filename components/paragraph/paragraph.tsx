'use client';
import { TextData } from '@/app/constant';

const Paragraph = ({ text }: { text: TextData }) => {
  return (
    <div>
      {text.map((part, partIndex) => {
        const partKey = Object.keys(part)[0];
        const partValue = part[partKey];

        return partValue.map((chapter) => {
          const chapterKey = Object.keys(chapter)[0];
          const chapterValue = chapter[chapterKey];
          // console.log(chapterValue);
          return (
            <div key={partIndex}>
              <div className="w-1/2 bg-black h-1 mx-auto max-w-screen-lg"></div>
              <h1 className="text-4xl my-8 text-center">{chapter.title}</h1>
              {chapterValue.paragraphs.map((paragraph, pIndex) => (
                <p className="m-4" key={pIndex}>
                  {paragraph}
                  {console.log(paragraph)}
                </p>
              ))}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Paragraph;
