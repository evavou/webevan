import React from 'react';
import CoolButton from '../components/buttons/CoolButton.jsx';
import { dataLinks } from './data_links.jsx';

export const sectionsDataFR = [
    /*--------------------MAIN ABOUT--------------------*/
    {
      id: 'about',
      title: 'about me',
      images: [
        { src: 'about_me.png', desc: 'Moi qui mange une pastabox' }
      ],
      text: (
        <>
          <h3>
            Vous avez trouvé mon site !
          </h3>
          <p>
            Je suis <strong>Evan Lancry</strong>, un futur ingénieur en informatique étudiant à Polytech Nantes.
            Je passe le plus clair de mon temps à expliquer aux ordinateurs pourquoi ils ont tort
            (ils ne sont souvent pas d'accord).
            Si vous avez besoin d'une preuve plus formelle de mon existence,
            mon CV est disponible.
            <br/><br/>
            Ce site est une <strong> galerie de mes projets</strong>,
            ou du moins de ceux qui n'ont pas fini dans le grand cimetière des idées qui sont restées des idées.
            N'hésitez pas à me contacter si vous avez une question :)
            Je serais ravi d'avoir des retours !
            <br/><br/>
            NOTE : Ce site a été construit de mes propres mains.{' '}
            <strong>L'IA doit rester un tuteur, pas une machine à écrire.</strong>{' '}
            Les images de fond, la structure et les choix de design (parfois discutables) sont entièrement de moi.
          </p>
        </>
      ),
      buttons: (
          <div className="btn-layout-col">

            {/* Bouton PDF */}
            <CoolButton href={dataLinks.resume} isPdf>
              CV ↗
            </CoolButton>

            {/* Ligne de 2 boutons */}
            <div className="btn-layout-row">
              <CoolButton onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact')); }}>
                Me contacter
              </CoolButton>
              <CoolButton href={dataLinks.github} isExternal>
                Github
              </CoolButton>

            </div>


          </div>
        )
    },
    /*--------------------YT-JUKEBOX--------------------*/
    {
      id: 'jukebox',
      title: 'yt-jukebox',
      images: [
        { src: 'jukebox_capture.png', desc: 'Menu du site' }
      ],
      text: (
        <>
          <h3>
            Les meilleures playlists YouTube, réunies au même endroit
          </h3>
          <p>
            Vous en avez marre d'avoir trop d'onglets ouverts pour garder des playlists de musique sympa sur YouTube ?
            Moi aussi !!!
            C'est pour ça que j'ai créé ce site.
            <br/><br/>
            On peut y trier les vidéos par tags, par durée ou par chaîne.
            Et si c'est toujours trop la galère de choisir, le bouton aléatoire est là rien que pour vous 🎲
            <br/><br/>
            C'est le tout premier site que j'ai fait, votre indulgence est la bienvenue.
            Si vous avez des suggestions, n'hésitez pas à me contacter :)
            <br/><br/>
            Les 125 vidéos ont toutes été choisies par mes soins,
            et il n'y a pour l'instant aucun moyen d'ajouter ou de modifier des vidéos depuis le site.
            Mais j'y travaille !
          </p>
        </>
      ),
      buttons: (
        <CoolButton href={dataLinks.jukebox} isExternal>
          Visiter le site ↗
        </CoolButton>
      )
    },
    /*--------------------VRAILLE--------------------*/
    {
      id: 'vraille',
      title: 'vraille',
      images: [
        { src: 'vraille_alphabet.png', desc: 'Menu de Vraille Editor' },
        { src: 'vraille_expl.png', desc: 'Apparence de Vraille Editor' }
      ],
      text: (
        <>
          <h3>
            L'alphabet latin c'est du déjà vu... Go en faire un nouveau !
          </h3>
          <p>
            Est une idée qui a fini par me prendre beaucoup trop de temps.
            Mon but était de créer l'alphabet le plus simple et le plus compact possible.
            Ça m'a amené à créer le Traille, un mélange entre le {' '}
            <a href={dataLinks.braille} target="_blank" rel="noopener noreferrer">
              Braille
            </a> et le{' '}
            <a href={dataLinks.trunic} target="_blank" rel="noopener noreferrer">
              Trunic
            </a>.
            Mais cet alphabet s'est retrouvé avec pas mal de défauts...
            notamment, les symboles étaient trop compliqués, ce qui ralentissait considérablement la vitesse d'écriture.
            J'ai corrigé ces défauts dans une deuxième version, appelée <strong>Vraille</strong>.
            <br/><br/>
            Le Vraille est un <strong>alphabet phonétique</strong>, donc chaque lettre est prononcée.
            Bien que cela réduise la longueur des mots, ça veut aussi dire que
            deux mots différents avec la même prononciation s'écriront exactement de la même manière.
            Il en existe une version française et une anglaise, avec une compatibilité phonétique.
            Mais le Vraille a été créé à l'origine pour le français,
            donc la version anglaise n'est pas très optimisée.
            <br/><br/>
            En Vraille, toutes les consonnes sont construites à partir de lignes horizontales et verticales,
            tandis que les voyelles sont faites de diagonales, de points et de cercles.
            Vous pouvez télécharger <strong>l'alphabet phonétique officiel du Vraille</strong> pour y jeter un coup d'œil !
            <br/><br/>
            J'ai aussi codé un <strong>éditeur de Vraille</strong> en C, en utilisant SDL3 pour le rendu graphique.
            L'éditeur traduit automatiquement les mots dans leur version phonétique et les affiche en Vraille.
            Il y a plusieurs paramètres permettant de modifier le style des lettres.
            La version téléchargeable n'est pas encore disponible, mais ça ne devrait plus trop tarder
            (y'a encore du travail sur la version anglaise).
          </p>
        </>
      ),
      buttons: (
        <div className="btn-layout-col">
            {/* Ligne de 2 boutons */}
            <div className="btn-layout-row">
              <CoolButton href={dataLinks.vraille_guide_fr} isPdf>
                Guide Français  ↗
              </CoolButton>
              <CoolButton href={dataLinks.vraille_guide_en} isPdf>
                Guide Anglais ↗
              </CoolButton>
            </div>

            <CoolButton isWip>
              Télécharger Vraille Editor
            </CoolButton>
        </div>

      )
    },
    /*--------------------SCHOOLFISH--------------------*/
    {
      id: 'schoolfish',
      title: 'schoolfish',
      images: [
        { src: 'schoolfish_capture.png', desc: 'Photo de ma simulation (~200 poissons)' }
      ],
      text: (
        <>
          <h3>
            Qu'est-ce qui est mieux qu'un poisson ?
            Mille poissons !
          </h3>
          <p>
            Pour mon travail de recherche de classe préparatoire (TIPE), 
            mon binôme et moi avons décidé de coder une simulation sur mesure de A à Z en C
            pour étudier <strong>les bancs de poissons</strong>.
            Nous avons utilisé la{' '}
            <a href={dataLinks.raylib} target="_blank" rel="noopener noreferrer">
              bibliothèque Raylib
            </a> pour le rendu et basé notre logique sur le modèle d'Aoki-Couzin. 
            Chaque poisson a trois bulles invisibles d'"espace personnel" qui dictent s'il
            doit se rapprocher, s'aligner ou s'éloigner de ses voisins. 
            Sur les conseils du chercheur Clément Sire, nous avons aussi ajouté un bruit mathématique
            aléatoire pour éviter que les poissons ne surréagissent et pour rendre leurs mouvements plus stables et naturels.
            <br/><br/>
            Une fois que les poissons nageaient bien, j'ai fait la seule chose logique à faire :{' '}
            <strong>j'ai lâché un requin dans le banc.</strong>{' '}
            Je voulais voir comment les différentes formations du banc
            (comme des lignes organisées ou des vortex) résistaient face à un prédateur.
            En observant des indicateurs numériques de leurs phases, j'ai découvert que l'état le plus sûr
            n'est pas une forme fixe, mais plutôt la <strong>phase de transition</strong> très sensible entre ces formations.
            <br/><br/>
            Cependant, comme cet état est hyper sensible, la moindre petite perturbation peut complètement
            ruiner l'efficacité du banc.
            J'ai fait des tests où j'injectais des poissons "perturbateurs" dans le tas
            (des poissons paumés d'une autre espèce qui ignorent les règles du banc). 
            Résultat des courses, ajouter seulement 4 % de ces imposteurs brise l'harmonie et augmente
            le taux de réussite du requin de 10 %🦈!
            <br/><br/>
            Le code source de cette simulation n'est pas encore dispo sur mon GitHub
            (il a besoin d'un peu de nettoyage), 
            mais il devrait être en ligne un de ces quatre !
          </p>
        </>
      ),
      buttons: (
        
        <div className="btn-layout-col">
          <CoolButton isWip>
            Plus de poissons
          </CoolButton>
        </div>
      )
    },
    /*--------------------ART--------------------*/
    {
      id: 'art',
      title: 'art',
      images: [
        { src: 'art_debut.png', desc: 'quelque chose que j\'ai fait' }
      ],
      text: (
        <>
          <h3>
            "Art is not for fixing yourself, it is for showing others that you are
            broken so they might feel less alone"
          </h3>
          <p>
            C'est une citation d'
            <a href={dataLinks.exurb1a} target="_blank" rel="noopener noreferrer">
              exurb1a
            </a>
            {' '}sur YouTube. Je recommande vivement si une petite crise existentielle
            livrée avec un fort accent britannique ne vous fait pas peur.
            <br/><br/>
            De temps en temps, généralement quand mon code refuse de compiler,
            j'ouvre Photoshop sans but précis et je dessine des trucs
            (je fais aussi des choses qui ne sont pas sur un écran si c'est la folie).
            Le but là c'est aussi de faire de ce site un endroit où je pourrais mettre mes petites créations.
            <br/><br/>
            Par contre, je n'ai pas encore codé la page de la galerie pour exposer tout ça...
            mais c'est très haut sur ma to-do list ! (avec un milliard d'autres choses bien sûr)
            Une fois que ce sera en ligne, n'hésitez pas à y jeter un coup d'œil et même à utiliser des trucs
            que j'ai faits si jamais l'envie vous prend, envoyez-moi juste un petit mail avant :)
            <br/><br/>
            Pour l'instant, vous ne pouvez qu'admirer le seul truc que j'ai mis sur ce site,
            juste à côté de ce texte. En plus de ces sublimes fonds bien sûr !
          </p>
        </>
      ),
      buttons: (
        <div className="btn-layout-col">
          <CoolButton isWip>
            D'autres trucs que j'ai faits
          </CoolButton>
        </div>
      )
    },
    /*--------------------MINECRAFT--------------------*/
    {
      id: 'minecraft',
      title: 'minecraft',
      images: [
        { src: 'minecraft_first.png', desc: 'Screenshot de mon monde' }
      ],
      text: (
        <>
          <h3>
            Et oui, je joue à Minecraft
          </h3>
            <p>
            Top le jeu.
            En sah, c'est juste de l'architecture avec des cubes.
            En tout cas ça fait un peu plus de 6 ans que je joue sur le même monde,
            à construire des trucs bloc par bloc.
            <br/><br/>
            On a tous un délire un peu chelou nan ?
            <br/><br/>
            J'ai prévu de faire une page dédiée ici pour exposer certains de mes builds, ça peut être sympa.
            En travaux !
          </p>
        </>
      ),
      buttons: (
        <div className="btn-layout-col">
          <CoolButton isWip>
            Des agglomérats de cubes
          </CoolButton>
          </div>
      )
    },

    /*--------------------PAGE BOTTOM--------------------*/
    {
      id: 'bottom',
      title: 'page bottom',
      images: [],
      text: (
        <>
          <h3>
            Vous êtes arrivé tout en bas !
          </h3>
          <p>
            Votre récompense ? Le privilège absolu de m'envoyer un mail :)
          </p>
        </>
      ),
      buttons: (
        <div className="btn-layout-col">
          
          <CoolButton onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact')); }}>
            Me contacter
          </CoolButton>

          {/* BOÎTE DE COPYRIGHT */}
          <div className="copyright-box">
            © {new Date().getFullYear()} Evan Lancry.{' '}
            <span style={{ display: 'inline-block' }}>
              Source code available on{' '}
              <a href={dataLinks.github_webevan} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>.
            </span>
            
            <br/>
            All rights reserved for original assets and creations.
          </div>

        </div>
      )
    },
  ];
