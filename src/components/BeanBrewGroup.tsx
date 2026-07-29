import type { MenuItem } from "../types";
import BrewCard from "./BrewCard";
import RoastLevel from "./RoastLevel";

interface Props {
  item: MenuItem;
}

// 【豆グループ】1つの豆（品種）に複数の抽出法（item.brews）がある場合の表示。
// 豆名を見出しに、画像・産地・焙煎度・温度・豆全体の説明をまとめて表示し、
// その下に抽出法ごとの BrewCard を縦に並べます。
// 説明と味覚チャート・挽き方が抽出法ごとに変わります。
function BeanBrewGroup({ item }: Props) {
  return (
    <div className="bean-group">
      <div className="bean-group__header">
        {item.image && (
          <img className="bean-group__image" src={item.image} alt={item.name} />
        )}

        <div className="bean-group__info">
          <div className="bean-group__head">
            <h3 className="bean-group__name">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              ) : (
                item.name
              )}
              {item.temperature?.map((t) => (
                <span
                  key={t}
                  className={`tag tag--temp tag--temp-${t.toLowerCase()}`}
                >
                  {t}
                </span>
              ))}
            </h3>
            {typeof item.price === "number" && (
              <span className="menu-card__price">
                ¥{item.price.toLocaleString()}
              </span>
            )}
          </div>

          {item.origin && (
            <div className="menu-card__tags">
              <span className="tag tag--origin">{item.origin}</span>
            </div>
          )}

          {item.roast && <RoastLevel roast={item.roast} />}

          <p className="menu-card__desc">{item.description}</p>
        </div>
      </div>

      <div className="bean-group__brews">
        {item.brews?.map((brew) => (
          <BrewCard key={`${brew.brewMethod}-${brew.temperature}`} brew={brew} />
        ))}
      </div>
    </div>
  );
}

export default BeanBrewGroup;
