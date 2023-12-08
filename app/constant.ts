type Chapter = {
  title: string;
  paragraphs: string[];
};

type Part = {
  [chapterKey: string]: Chapter;
};

export type TextData = Part[];

const text = [
  {
    'partie-1': [
      {
        'chapter-1': {
          title: 'Négation du réchauffement',
          paragraphs: [
            "Réchauffement climatique ? Encore une blague de bobos éco-consciencieux qui n'a pas de problèmes dans la vie.",
            "Gars depuis la fin du XIXe siècle, la température moyenne mondiale a connu une hausse d'environ 1,2 °C. Cette augmentation, mesurée par la NASA, souligne une tendance au réchauffement global au fil des décennies.",
            "Cette montée des températures s'accompagne d'une élévation du niveau de la mer d'environ 20 centimètres au cours du XXe siècle, une observation consolidée par les rapports du GIEC. Ce phénomène, bien que paraissant graduel, a des implications significatives sur les écosystèmes côtiers et les communautés qui en dépendent.",
            'La fonte accélérée des glaciers est également un élément marquant du changement climatique. Les chiffres du GIEC indiquent une perte annuelle moyenne de glace située entre 260 et 370 milliards de tonnes, soulignant une modification rapide des paysages glaciaires à travers le monde.',
            'Les événements météorologiques extrêmes, tels que les vagues de chaleur, ont augmenté en fréquence depuis les années 1950, selon les rapports du GIEC. Cette intensification des phénomènes climatiques a des répercussions directes sur la vie quotidienne des populations, de la sécurité alimentaire aux conditions de vie.',
            "La perte de biodiversité est une conséquence inquiétante du réchauffement climatique. Entre 500 000 et 1 million d'espèces animales et végétales sont actuellement menacées d'extinction, un impact grave sur l'équilibre écologique de notre planète selon le rapport IPBES.",
            "Les événements climatiques extrêmes, allant des ouragans aux incendies de forêt, ont considérablement augmenté en fréquence et en intensité. Ces phénomènes ont des conséquences dévastatrices sur les communautés, nécessitant des mesures d'adaptation et d'atténuation.",
            "Les coûts économiques liés au changement climatique sont substantiels, atteignant 2100 milliards de dollars au cours des deux dernières décennies, comme indiqué dans le rapport Stern. Ces chiffres mettent en lumière l'impact financier important des phénomènes climatiques extrêmes sur l'économie mondiale.",
            "Les projections de la Banque mondiale estiment qu'entre 25 et 1 milliard de personnes pourraient être déplacées d'ici 2050 en raison du changement climatique. Ce déplacement massif soulève des questions complexes liées à la migration climatique et aux droits de l'homme.",
            "Enfin, en examinant les émissions par secteur, l'Agence internationale de l'énergie constate que le secteur de l'énergie est responsable de 73% des émissions mondiales de gaz à effet de serre. Cela souligne l'importance cruciale d'une transition vers des sources d'énergie plus durables pour atténuer les impacts futurs du changement climatique.",
          ],
        },
      },
      {
        'chapter-2': {
          title: 'Des conséquences négligeables du réchauffement climatique',
          paragraphs: [
            "Le climat sera 2° plus haut et alors !? On aura qu'à enlever nos pulls, pas besoin d'en faire tout un foin non !? Pourquoi tout le monde s'excite comme ça ?",
            "On peut comprendre pourquoi tu te dis peut-être que 2 degrés de plus, c'est pas la fin du monde, littéralement. On pourrait penser qu'on va juste mettre nos pulls de côté et voilà, non? Mais, laisse-moi te parler un peu plus en détail.",
            "Imaginons que le thermostat global monte de 2 degrés. Ça peut sembler minime, mais c'est le genre de petite différence qui peut avoir des effets en cascade. D'abord, nos potes les écosystèmes n'aiment pas trop ça. Des espèces animales et végétales peuvent se retrouver dans des endroits où elles ne devraient pas être, créant des déséquilibres dans la nature.",
            "Et puis, l'agriculture prend un coup. Moins de rendements, moins de bouffe sur nos tables. Tu vois où je veux en venir? C'est pas seulement une question de se retrousser les manches, c'est aussi une question de ce qu'on met dans nos assiettes.",
            'On parle aussi des vagues de chaleur plus fréquentes. Imagine des étés où on n\'a même plus le temps de dire "glace à la vanille". La santé en prend un coup avec des risques accrus pour des problèmes comme les insolations, sans parler des impacts sur la santé mentale.',
            'Maintenant, accroche-toi bien, on parle de montée du niveau de la mer. Pas juste une histoire de plages qui se rétrécissent, mais de vraies menaces pour des millions de personnes vivant près des côtes. Des changements qui pourraient bouleverser des vies.',
            "Et bien sûr, il y a les coûts, pas juste en termes d'argent, mais de qualité de vie. Du coût des soins de santé supplémentaires aux dégâts causés par des catastrophes naturelles plus fréquentes, ça impacte tout le monde d'une manière ou d'une autre.",
            "Alors ouais, à première vue, 2 degrés de plus peuvent sembler gérables, mais c'est pas juste une question de confort thermique. C'est une question de tout ce qui rend notre vie quotidienne possible. Voilà pourquoi ça passionne tant de gens.",
          ],
        },
      },
      {
        'chapter-3': {
          title: 'Une évolution naturelle dûe à des causes naturelles',
          paragraphs: [
            'Ehh, en vrai, si on regarde les cycles de température de la terre, ce réchauffement est  naturel. ',
            "Bah oui, la terre se réchauffe avec les variations de l'activité solaire par exemple. Même avec les éruptions volcaniques ! Et puis il y aussi l'intensification de l'effet de serre… Mais euh.. Est-ce que c'est vraiment naturel ça ? Ben… Quand on y réfléchit… On est quand même en partie responsable… Même en grande partie.",
            "En effet, les émissions de gaz à effet de serre sont l'une des grandes causes de cette intensification… Et qui est responsable de ces émissions ? C'est nous…",
            "D'après le site du gouvernement, les activités humaines qui impactent le plus cette intensification sont l'émission de CO2, avec la combustion d'énergies fossiles par exemple, l'émission de méthane, avec l'agriculture, ainsi que l'émission de protoxyde d'azote, également engendré par l'agriculture.",
            'https://www.notre-environnement.gouv.fr/themes/climat/article/les-emissions-de-gaz-a-effet-de-serre-et-l-empreinte-carbone ',
          ],
        },
      },
      {
        'chapter-4': {
          title: 'Ces prédictions ne sont pas fiables et sont issues des lobbies',
          paragraphs: [
            "De toute façon les prédictions de changement de climat c'est n'importe quoi ! C'est tout un complot pour que les lobbies s'en mettent encore plus dans la poche ! Non ? ",
            "C'est quand même pas des scientifiques indépendants qui ont fait des recherches dessus quand même ? Attendez mais… Il y a même des organisations internationales qui vérifient les recherches… ? Mais vous les sortez d'où ces informations ? Encore du gouvernement ?!",
            "Ah oui… Le GIEC (Gouvernement Intergouvernemental sur l'Evolution du Climat) à même publié leur 6ème rapport cette année en 2023… Il faudrait vraiment que je me mette à lire moi…",
            'https://www.ecologie.gouv.fr/publication-du-6e-rapport-synthese-du-giec ',
          ],
        },
      },
      {
        'chapter-5': {
          title: "Croyance en la science pour qu'on s'adapte aux changements à venir",
          paragraphs: [
            "Je sais que l'idée de s'adapter aux changements climatiques peut sembler un peu frustrante, mais il y a des raisons solides derrière cette approche. Les scientifiques, avec des données sérieuses, démontrent de manière irréfutable que la planète subit des transformations significatives. Des températures en hausse aux océans qui montent, ces signaux sont difficiles à ignorer et sont bien plus que des scénarios de science-fiction.",
            "L'adaptation n'est pas une lubie d'écolos. C'est une nécessité qui concerne tout le monde. Qu'on aime le bio ou pas, prendre des mesures pour s'ajuster aux réalités climatiques en évolution est une décision pragmatique. Ça ne consiste pas seulement à planter des arbres, mais à sauvegarder nos vies et celles de nos proches.",
            "Les implications vont bien au-delà des ours polaires. Les vagues de chaleur mortelles, les tempêtes dévastatrices et la propagation de maladies sont des conséquences directes des changements climatiques. Ignorer ces risques potentiels, c'est jouer avec la sécurité et la santé de chacun.",
            "Économiquement parlant, l'adaptation est aussi une stratégie sensée. Ne pas s'y engager pourrait entraîner des pertes financières colossales. Des récoltes détruites, des infrastructures endommagées, des coûts de santé exorbitants - voilà des scénarios qui pourraient bien devenir la réalité si on ne prend pas les devants.",
            "Penser à l'adaptation, c'est comme s'entraîner pour un marathon. C'est pas toujours agréable sur le moment, mais c'est essentiel pour être prêt lorsque la vraie course arrive. Prévenir autant que possible les conséquences négatives des changements climatiques, c'est être prêt à affronter ce que la planète nous envoie.",
            "Enfin, il y a une dimension de responsabilité envers les générations futures. En choisissant d'ignorer les preuves scientifiques, on risque de laisser un héritage chaotique à nos descendants. Prendre des mesures maintenant, c'est contribuer à façonner un avenir plus sûr et plus stable pour eux.",
          ],
        },
      },
    ],
    'partie-2': [
      {
        'chapter-1': {
          title:
            "Il n'y a donc pas d'options, on est foutu, non l'espoir subsiste ? (Les options  viables et les actions utiles)",
          paragraphs: [
            "Hey là ! C'est normal de se sentir parfois un peu dépassé par tout ce bazar environnemental. Mais devine quoi ? L'espoir n'est pas une licorne mythique, c'est bien réel. On a une tonne d'options et d'actions qui peuvent faire la différence. Alors, allons déconstruire ce mythe du \"tout est foutu\" et regardons comment on peut changer la donne, même à petite échelle.",
          ],
        },
      },
      {
        'chapter-2': {
          title: 'Comment réduire votre empreinte carbone au quotidien',
          paragraphs: [
            "Bienvenue dans la section où chaque petit geste compte ! On te donne des astuces cool pour faire des choix plus verts dans ta vie quotidienne. C'est pas juste bon pour la planète, mais aussi pour ton porte-monnaie. On te montre que même en changeant des petites choses, tu contribues déjà à quelque chose de grand.",
          ],
        },
      },
      {
        'chapter-3': {
          title: "L'importance des politiques en faveur du climat.",
          paragraphs: [
            "Maintenant, plongeons dans le monde des super-héros écolos en costard-cravate. On parle de politiques qui changent la donne à grande échelle. Des lois qui encouragent les énergies propres, qui mettent des limites aux pollueurs, et qui rendent le monde meilleur pour tout le monde. Parce qu'ensemble, on peut vraiment accomplir des trucs incroyables.",
          ],
        },
      },
      {
        'chapter-4': {
          title: 'Juste transition sociale',
          paragraphs: [
            'Alors comment on fait pour que tout le monde puisse profiter de ce changement, sans laisser personne sur le bas-côté ? On met en lumière les inégalités potentielles et on discute de la façon dont on peut faire en sorte que cette transition soit équitable pour tous. On veut que chacun trouve sa place dans cette aventure verte.',
            "En résumé, oublie le \"tout est foutu\" ! On a des solutions individuelles, des actions collectives, et une transition sociale qui met tout le monde sur la même longueur d'onde. Ça, c'est de l'espoir en action. Alors, prêt à embarquer dans la positive attitude écolo ?",
          ],
        },
      },
    ],
  },
];

export default text;
