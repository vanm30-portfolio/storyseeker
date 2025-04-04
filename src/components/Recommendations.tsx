import { RecommendCard } from './RecommendCard';
import { EState } from '@/utils/enums';

import { IRecommendations } from '@/utils/types';

interface IRecommendationsComponent {
  setState: (state: EState) => void;
  recommendations: IRecommendations;
}

export function Recommendations({
  setState,
  recommendations,
}: IRecommendationsComponent) {
  return (
    <div className="flex flex-col gap-6">
      <button onClick={() => setState(EState.Idle)}>Back</button>
      <div className="flex flex-wrap justify-center gap-12">
        {recommendations.books?.map((item, index) => (
          <RecommendCard
            key={index}
            name={item.name}
            coverImage={item.coverImage}
            link={item.link}
            shortDesc={item.shortDesc}
            plot={item.plot}
            genre={item.genre}
            rating={item.rating}
            author={item.author}
            ISBN={item.ISBN}
            pageCount={item.pageCount}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        {recommendations.movies?.map((item, index) => (
          <RecommendCard
            key={index}
            name={item.name}
            coverImage={item.coverImage}
            link={item.link}
            shortDesc={item.shortDesc}
            plot={item.plot}
            genre={item.genre}
            rating={item.rating}
            director={item.director}
            boxOffice={item.boxOffice}
            runtime={item.runtime}
          />
        ))}
      </div>
    </div>
  );
}
