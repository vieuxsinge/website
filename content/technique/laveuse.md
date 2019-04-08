Title: Une laveuse de fûts maison
Slug: une-laveuse-de-futs-maison
Date: 2019-04-07
Accroche: Ou la victoire de l'inox sur le plastique
image: /images/laveuse/futs.jpg
Author: Fred

> Cet article est un retour sur la fabrication d'une laveuse et les choix associés.<br>
> Pour les détails techniques, [tout est publié sous licence libre](https://github.com/vieuxsinge/kegwasher).

On nous avait pourtant prévenus ! Être brasseur, c'est avant tout passer du temps à nettoyer. Sauf que nettoyer, c'est pas ce qu'on préfère. Quand on a démarré, on s'est posé la question du type de fûts avec lesquels on voulait travailler et les fûts inox ne partaient pas forcément gagnants car on peut passer beaucoup de temps à les nettoyer.

Aujourd'hui beaucoup de brasseurs travaillent avec des fûts en plastique jetables qui ressemblent à des grosses bouteilles de soda. L'avantage de ces fûts jetables c'est qu'il n'y a pas besoin de gérer le trajet retour, mais *surtout* qu'ils arrivent déjà propres et qu'on s'évite un temps non négligeable de nettoyage.

Les fabricants poussent le bouchon jusqu'à dire que ces fûts sont plus écologiques que des fûts inox car ils sont plus légers à transporter, qu'ils ne font pas de trajet retour et qu'ils seraient recyclables à 100%. La réalité est bien moins glorieuse puisque ces fûts font *tous* un premier trajet à vide depuis le fabricant et qu'aucune filière de recyclage n'est actuellement vraiment en place pour ces fûts.

![Fûts plastiques vs inox](images/laveuse/plastique.jpg)

Franchement pas emballés (c'est le cas de le dire) par tout ce plastique on s'est donc plutôt orientés vers un parc de fûts en inox réutilisables (presque) à vie.

Un fût inox (~60€) s'amortit assez vite quand on compare à un fût jetable (~15€).
Le soucis c'est qu'il faut une machine pour les laver et que, de ce côté, les prix grimpent très vite : il faut compter environ 10 000€ pour une machine basique.

Après quelques recherches sur Internet, on a décidé de remettre le nez dans nos cours d'électronique pour nous fabriquer une laveuse automatique maison avec un budget de 2000€ !

## Principe

De la même manière que les laveuses commerciales, notre laveuse lave les fûts sans avoir à démonter les plongeurs. Les produits de nettoyage sont injectés via des têtes de lavage et sont aspergés à l'intérieur des fûts.
Elle est équipée de 2 têtes de lavage et permet donc de laver 2 fûts simultanément.

Le lavage dure 5mn au total pendant lesquelles plusieurs cycles s'enchaînent de la manière suivante :

- vidange
- rinçage
- nettoyage
- rinçage
- désinfection
- rinçage
- purge au CO2


On utilise pour ça des produits assez classiques de l'agroalimentaire qui sont recyclés en circuit fermé.
Le rinçage est réalisé avec l'eau du réseau.
Le nettoyage avec une solution de soude à 2% et à 80°C.
La désinfection est faite à froid avec une solution d'acide peracétique à 1%.
De l'air est envoyé entre chaque cycle pour purger les tuyaux et éviter que les produits ne se mélangent.
Enfin le fût est purgé avec du CO2 pour éviter l'oxydation de la bière.

Mais une démo vaut toujours mieux qu'un long discours :

* [Vidéo sur le fonctionnement général](https://vimeo.com/318256040)
* [Vidéo sur la partie électronique](https://vimeo.com/318257333)


## Contraintes et choix

Les laveuses de fûts du commerce utilisent souvent la vapeur pour l'étape de désinfection.
Le point négatif c'est le coût d'une petite station vapeur pour laquelle il faut compter au moins 3000€.
Nous sommes donc partis sur une désinfection à l'acide peracétique.

Côté nettoyage, la soude est connue pour mal réagir en présence de CO<sub>2</sub>, ce qui a pour conséquence d'encrasser l'inox à long terme. Nous utilisons donc de l'air comprimé pour chasser le CO2 présent dans le fût avant son nettoyage. On avait déjà un compresseur à la brasserie pour ça.

Inversement, la bière s'oxyde assez vite en présence d'oxygène, il nous fallait donc une étape finale de purge au CO2 avant remplissage.

Du point de vue de l'utilisation, on souhaitait ne pas avoir à démonter les plongeurs car c'est une étape assez longue et pénible au bout d'un certain temps.
On souhaitait également que le lavage se passe de manière automatique pour nous permettre de remplir les fûts propres en parallèle.
Enfin l'idée c'est également que la laveuse soit fiable et un minimum durable.

Partant de ces contraintes, on a fait le choix d'une laveuse sur roulettes avec 2 bacs produits (détergent et désinfectant), une arrivée d'eau, une arrivée d'air, une arrivée de CO2 et une évacuation. Tous les raccords sont en inox et les tuyaux adaptés au passage de produits agressifs.

Le choix des liquides/gaz qui circulent se fait grâce à un ensemble d'électrovannes ainsi qu'une petite pompe.
Toutes ces électrovannes sont pilotées par une carte Arduino qui présente l'avantage d'être simple et pas chère.

![La bête !](images/laveuse/cadre1.jpg)

Pour plus d'infos sur les détails de conception [tout est publié sous licence libre](https://github.com/vieuxsinge/kegwasher).

## Améliorations

Lors de la première itération, nous n'avions pas prévu d'antiretours pour les liquides et les gaz. Le détergent remontait dans le détendeur de CO2 et inversement. Finalement ces antiretours ce sont vite montrés indispensables.

Ensuite, au bout d'un certain temps, les relais électroniques ont tous lâchés les uns après les autres. C'est à ce moment qu'on s'est rendus compte qu'il fallait les protéger électriquement.

Depuis cette 3ème version, tous se passe plutôt bien et on profite de séances de remplissage plutôt paisibles ;)
On s'est même rendus compte que la laveuse pouvait également nous servir à nettoyer nos tireuses avec peu de modifications.

Vous aurez noté la présence d'un bac inox sur la laveuse. On avait au départ prévu de pouvoir laver des fûts ouverts ou des fûts de type sodakeg grâce à un système de boule de lavage. Par manque de temps, cette partie de la laveuse n'a pas encore été développée, mais ne nécessiterait pas beaucoup de travail pour être mise en place.

## Nos retours

Nous n'avons qu'un retour d'à peine 1 an sur notre machine et certaines parties (notamment la partie électronique) pourraient être repensées complètement.

Mais grâce à une petite laveuse automatique comme celle-ci, l'utilisation de fûts en inox est devenue un vrai bonheur.
Le temps de lavage est complètement masqué car tout se fait en parallèle du remplissage.

On évite ainsi de remplir notre environnement de plastique supplémentaire.

Il faut cependant reconnaître qu'il nous aura fallu un peu de temps et de connaissances pour mener ce projet à bout. Difficile de se lancer sans aucun bagage en électronique, et comme pour tout prototype, il nous aura fallu plusieurs itérations avant que la machine ne soit vraiment fonctionnelle.

Finalement, ce petit projet d'automatisation a fait germé de nouvelles idées dans nos esprits de fainéants pour nous simplifier la vie toujours plus. Parmis ces idées, l'automatisation des températures de fermentation, la mise en place d'alertes en cas de problème à la brasserie et une laveuse automatique de fermenteurs (CIP automatique dans le jargon).

## Inspirations

Pour la conception, on s'est beaucoup inspirés de ce qui avait déjà été fait, notamment :

- http://grenaille.blogspot.com/p/autowash-gp-42.html
- https://www.youtube.com/watch?v=6FMlzzj3Ndc
- https://www.youtube.com/watch?v=loru8GVTiRk

Merci pour le partage !




