'use client';
import { Text } from '@/app/constant';

const Paragraph = ({ text }: { text: Text }) => {
  return (
    <div>
      {text.map((chapterObj, index) => {
        const chapterKey = Object.keys(chapterObj)[0];
        const chapter = chapterObj[chapterKey];

        return (
          <div key={index}>
            <div className="w-1/2 bg-black h-1 mx-auto max-w-screen-lg"></div>
            <h1 className="text-4xl my-8 text-center">{chapter.title}</h1>
            {chapter.paragraphs.map((paragraph, pIndex) => (
              <p className="m-4" key={pIndex}>
                {paragraph}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Paragraph;
