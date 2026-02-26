import React from 'react';
import CoolButton from '../components/buttons/CoolButton.jsx';
import { dataLinks } from './data_links.jsx';

export const sectionsDataEN = [
    /*--------------------MAIN ABOUT--------------------*/
    {
      id: 'about',
      title: 'about me',
      images: [
        { src: 'about_me.png', desc: 'Me eating a pastabox' }
      ],
      text: (
        <>
          <h3>
            You found my website!
          </h3>
          <p>
            I'm <strong>Evan Lancry</strong>, a soon-to-be-released CS engineer studying at Polytech Nantes.
            I spend most of my time explaining to computers why they are wrong
            (they usually disagree).
            If you need more formal proof of my existence,
            my resume is available.
            <br/><br/>
            This website is a <strong>gallery of my projects</strong>,
            or at least the ones that didn't end in the great idea graveyard.
            Feel free to contact me if you have any questions :)
            I'd love to hear some feedback!
            <br/><br/>
            NOTE: This website was built with my bare hands, not prompted into existence.{' '}
            <strong>AI should remain a tutor, not a ghostwriter.</strong>{' '}
            The background, structure, and questionable design choices are entirely my own.
          </p>
        </>
      ),
      buttons: (
          <div className="btn-layout-col">

            {/* Bouton PDF */}
            <CoolButton href={dataLinks.resume} isPdf>
              Resume ↗
            </CoolButton>

            {/* Ligne de 2 boutons */}
            <div className="btn-layout-row">
              <CoolButton onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact')); }}>
                Contact me
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
        { src: 'jukebox_capture.png', desc: 'Look of the website' }
      ],
      text: (
        <>
          <h3>
            The best Youtube playlists, all in one place
          </h3>
          <p>
            Tired of having too many tabs open just to save your favorite youtube music playlists?
            Me too!!!
            That's why I created this website.
            <br/><br/>
            You can sort videos by tags, lenght or channel.
            And if that's still too hard to choose, the random button is here just for you 🎲
            <br/><br/>
            This is the first website I've made, so please be forgiving.
            If you have any suggestions, feel free to contact me :)
            <br/><br/>
            All 125 videos were chosen by me,
            and there is no way to add or edit videos from the website currently.
            But I'm working on it!
          </p>
        </>
      ),
      buttons: (
        <CoolButton href={dataLinks.jukebox} isExternal>
          Go to website ↗
        </CoolButton>
      )
    },
    /*--------------------VRAILLE--------------------*/
    {
      id: 'vraille',
      title: 'vraille',
      images: [
        { src: 'vraille_alphabet.png', desc: 'Menu of Vraille Editor' },
        { src: 'vraille_expl.png', desc: 'Look of Vraille Editor' }
      ],
      text: (
        <>
          <h3>
            Latin alphabet is boring... Let's make a new one
          </h3>
          <p>
            Is an idea that ended up taking me an outrageous amount of time.
            My goal was to create the simplest and most compact alphabet possible.
            That led me to create Traille, a mix between {' '}
            <a href={dataLinks.braille} target="_blank" rel="noopener noreferrer">
              Braille
            </a> and{' '}
            <a href={dataLinks.trunic} target="_blank" rel="noopener noreferrer">
              Trunic
            </a>.
            But this alphabet ended up having a lot of flaws...
            mainly, the symbols were too complicated, considerably slowing down the handwriting speed.
            I corrected those flaws in a second version, called <strong>Vraille</strong>.
            <br/><br/>
            Vraille is a <strong>phonetic alphabet</strong>, so every letter is pronounced.
            While this decreases the word length, this does mean that
            two different words with the same pronunciation will be written the same way.
            There exists an English and a French version of it, with phonetic compatibility.
            But Vraille was originally made for the French language,
            so the English version is not really optimized.
            <br/><br/>
            In Vraille, all consonants are built of horizontal and vertical lines.
            While vowel are made of diagonals, dots and circles.
            You can download the <strong>official phonetic Vraille alphabet</strong> to check it out!
            <br/><br/>
            I also built a <strong>Vraille editor</strong> in C using SDL3 for rendering.
            The editor automatically translates words into their phonetic versions, and displays them in Vraille.
            There are a lot of controls to change the styles of the Vraille letters.
            The downloadable version is not available yet, but shouldn't take too long to come out
            (still working on the English version).
          </p>
        </>
      ),
      buttons: (
        <div className="btn-layout-col">
            {/* Ligne de 2 boutons */}
            <div className="btn-layout-row">
              <CoolButton href={dataLinks.vraille_guide_en} isPdf>
               English Guide ↗
              </CoolButton>
              <CoolButton href={dataLinks.vraille_guide_fr} isPdf>
                French Guide ↗
               </CoolButton>
            </div>

            <CoolButton isWip>
              Download Vraille Editor
            </CoolButton>
        </div>

      )
    },
    /*--------------------SCHOOLFISH--------------------*/
    {
      id: 'schoolfish',
      title: 'schoolfish',
      images: [
        { src: 'schoolfish_capture.png', desc: 'A capture of my simulation (~200 fish)' }
      ],
      text: (
        <>
          <h3>
            What's better than a fish?
            A thousand of them!
          </h3>
          <p>
            For my final-year engineering research project (known as a TIPE here in France), 
            my partner and I decided to build a custom simulation from scratch in C
            to study <strong>schools of fish</strong>.
            We used the{' '}
            <a href={dataLinks.raylib} target="_blank" rel="noopener noreferrer">
              Raylib library
            </a> for rendering and based our logic on the Aoki-Couzin model. 
            Essentially, each fish has three invisible "personal space" bubbles that dictate whether
            it should swim towards, align with, or run away from its neighbors. 
            Following the advice of researcher Clément Sire, we also added some random mathematical
            noise to stop the fish from overreacting and to make their movements more stable.
            <br/><br/>
            Once the fish were happily swimming, I did the only logical thing: {' '}
            <strong>I unleashed a digital shark into the code.</strong>{' '}
            I wanted to see how the school's different formations (like
            organized lines or spinning vortexes) held up against a predator. 
            By tracking numerical indicators, I discovered that the absolute safest state
            isn't a fixed shape, but rather the highly sensitive <strong>transition phase</strong> between them.
            <br/><br/>
            However, because this state is so sensitive, just a tiny perturbation can completely
            ruin the school's efficiency. 
            I ran tests where I injected "disruptive" fish into the mix (basically
            clueless fish from another species that completely ignore the school's rules). 
            Turns out, adding just 4% of these impostors breaks the harmony and increases
            the shark's success rate by 10%🦈!
            <br/><br/>
            The source code for this simulation isn't available on my GitHub just yet
            (it still needs some work), 
            but it should be uploaded very soon!
          </p>
        </>
      ),
      buttons: (
        
        <div className="btn-layout-col">
          <CoolButton isWip>
            More fish
          </CoolButton>
        </div>
      )
    },
    /*--------------------ART--------------------*/
    {
      id: 'art',
      title: 'art',
      images: [
        { src: 'art_debut.png', desc: 'something i made' }
      ],
      text: (
        <>
          <h3>
            "Art is not for fixing yourself, it is for showing others that you are
            broken so they might feel less alone"
          </h3>
          <p>
            This is actually a quote from {' '}
            <a href={dataLinks.exurb1a} target="_blank" rel="noopener noreferrer">
              exurb1a
            </a>
            {' '}on Youtube. Highly recommend you check that out if you're not afraid
            of an existential crisis delivered with a British accent.
            <br/><br/>
            From time to time, usually when my code refuses to compile,
            I open Photoshop with no real plan and I draw some stuff
            (or I make non-digital things as well, I promise I'm not that addicted to my PC).
            The ultimate goal is to make this section a place for all my random creations.
            <br/><br/>
            Full disclosure: I haven't actually built the gallery page to show anything yet
            but it's definitely on my to-do list! (with a thousand other things! yaaay! )
            Once it's up, feel free to look around and even use my silly art if you want,
            just shoot me an email first :)
            <br/><br/>
            For now, you can only stare at the single piece I uploaded, right next to this text. 
            On top of backgrounds of course, preview of what's to come!
          </p>
        </>
      ),
      buttons: (
        <div className="btn-layout-col">
          <CoolButton isWip>
            More of my silly art
          </CoolButton>
        </div>
      )
    },
    /*--------------------MINECRAFT--------------------*/
    {
      id: 'minecraft',
      title: 'minecraft',
      images: [
        { src: 'minecraft_first.png', desc: 'Screenshot of my world' }
      ],
      text: (
        <>
          <h3>
            And yes, I play Minecraft
          </h3>
          <p>
            Such a good game.
            It's basically just architecture with blocks,
            and I've been playing on the same world for about 6 years now. 
            <br/><br/>
            Building things block by block, one piece at a time,
            is a very cool way for me to relax and get creative.
            We all have our weird quirks, don't we?
            <br/><br/>
            I'm planning to make a dedicated page to showcase my best builds.
            It's on the way!
          </p>
        </>
      ),
      buttons: (
        <div className="btn-layout-col">
          <CoolButton isWip>
            Blocky stuff I've made
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
            You've reached the bottom!
          </h3>
          <p>
            Your reward? The absolute privilege of sending me an email :)
          </p>
        </>
      ),
      buttons: (
        <div className="btn-layout-col">
          
          <CoolButton onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact')); }}>
            Contact me
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
