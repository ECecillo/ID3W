export type Chapter = {
  title: string;
  paragraphs: string[];
};

export type Text = {
  [chapter: string]: Chapter;
}[];

const text = [
  {
    'chapter-1': {
      title: 'UNE ÉVOLUTION NATURELLE DÛE À DES CAUSES NATURELLES',
      paragraphs: [
        'Ehh, en vrai, si on regarde les cycles de température de la terre, ce réchauffement est naturel.',
        "Bah oui, la terre se réchauffe avec les variations de l'activité solaire par exemple. Même avec les éruptions volcaniques ! Et puis il y aussi l'intensification de l'effet de serre… Mais euh.. Est-ce que c'est vraiment naturel ça ? Ben… Quand on y réfléchit… On est quand même en partie responsable… Même en grande partie.",
        "En effet, les émissions de gaz à effet de serre sont l'une des grandes causes de cette intensification… Et qui est responsable de ces émissions ? C'est nous…",
        "D'après le site du gouvernement, les activités humaines qui impactent le plus cette intensification sont l'émission de CO2, avec la combustion d'énergies fossiles par exemple, l'émission de méthane, avec l'agriculture, ainsi que l'émission de protoxyde d'azote, également engendré par l'agriculture.",
      ],
    },
  },
  {
    'chapter-2': {
      title: 'Des conséquences négligeables du réchauffement climatique',
      paragraphs: [
        "Le climat sera 2° plus haut et alors !? On aura qu'à enlever nos pulls, pas besoin d'en faire tout un foin non !? Pourquoi tout le monde s'excite comme ça ?",
        "On peut comprendre pourquoi tu te dis peut-être que 2 degrés de plus, c'est pas la fin du monde, littéralement. On pourrait penser qu'on va juste mettre nos pulls de côté et voilà, non? Mais, laisse-moi te parler un peu plus en détail.",
        "Imaginons que le thermostat global monte de 2 degrés. Ça peut sembler minime, mais c'est   le genre de petite différence qui peut avoir des effets en cascade. D'abord, nos potes les écosystèmes n'aiment pas trop ça. Des espèces animales et végétales peuvent se retrouver dans des endroits où elles ne devraient pas être, créant des déséquilibres dans la nature.",
        "Et puis, l'agriculture prend un coup. Moins de rendements, moins de bouffe sur nos tables. Tu vois où je veux en venir? C'est pas seulement une question de se retrousser les manches, c'est aussi une question de ce qu'on met dans nos assiettes.",
        'On parle aussi des vagues de chaleur plus fréquentes. Imagine des étés où on n\'a même plus le temps de dire "glace à la vanille". La santé en prend un coup avec des risques accrus pour des problèmes comme les insolations, sans parler des impacts sur la santé mentale.',
        'Maintenant, accroche-toi bien, on parle de montée du niveau de la mer. Pas juste une histoire de plages qui se rétrécissent, mais de vraies menaces pour des millions de personnes vivant près des côtes. Des changements qui pourraient bouleverser des vies.',
        "Et bien sûr, il y a les coûts, pas juste en termes d'argent, mais de qualité de vie. Du coût des soins de santé supplémentaires aux dégâts causés par des catastrophes naturelles plus fréquentes, ça impacte tout le monde d'une manière ou d'une autre.",
        "Alors ouais, à première vue, 2 degrés de plus peuvent sembler gérables, mais c'est pas juste une question de confort thermique. C'est une question de tout ce qui rend notre vie quotidienne possible. Voilà pourquoi ça passionne tant de gens.",
      ],
    },
  },
];

export default text;
