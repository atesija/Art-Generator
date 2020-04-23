import { createGrammar, baseEngModifiers } from 'tracery-grammar';
import adjectives from '../constants/words/adjectives';
import nouns from '../constants/words/nouns';
import verbs from '../constants/words/verbs';
import names from '../constants/words/names';
import verbing from '../constants/words/verbing';
import verbPast from '../constants/words/verbPast';
import verbSingular from '../constants/words/verbSingular';
import adverbs from '../constants/words/adverbs';
import specificThings from '../constants/words/specificThings';

function getGrammar() {
  const grammar = createGrammar({
    artPrompt: '[#set_art_type#]#art_style.capitalize# #art_type.a# #prompt#',
    set_art_type: [
      '[art_type:poster][media_type:movie,show][prompt:#video_prompt#]',
      '[art_type:game cartridge,game case,game title screen][media_type:game][prompt:#game_prompt#]',
      '[art_type:album cover][media_type:album][prompt:#album_prompt#]',
      '[art_type:show poster][media_type:band][prompt:#show_prompt#]',
      '[art_type:abstract art][media_type:painting][prompt:#abstract_prompt#]',
      '[art_type:museum painting,painting,mural][media_type:painting][prompt:#painting_prompt#]',
      '[art_type:quick doodle,sketch,blind contour][media_type:doodle][prompt:#sketch_prompt#]',
      '[art_type:lot of,ton of,few][media_type:many][prompt:#many_prompt#]',
      '[art_type:comic,#comic_panel_length# panel comic][media_type:comic][prompt:#comic_prompt#]',
      '[art_type:book cover,book spine][media_type:book][prompt:#book_prompt#]',
    ],
    art_style: [
      'paint',
      'draw',
      'sketch',
      'make',
      'create',
      'create digital art of',
    ],
    sketchPrompt:
      '[#setSketchType#]#sketchStyle.capitalize# #art_type.a# #prompt#',
    setSketchType: [
      '[art_type:quick doodle,sketch,blind contour][media_type:doodle][prompt:#sketch_prompt#]',
      '[art_type:lot of,ton of,few][media_type:many][prompt:#many_prompt#]',
    ],
    sketchStyle: ['draw', 'sketch', 'make', 'create'],
    comicPrompt:
      '[art_type:comic,#comic_panel_length# panel comic][media_type:comic][prompt:#comic_prompt#]#sketchStyle.capitalize# #art_type.a# #prompt#',
    generic_prompts: [
      '#for_of# #media_type.a# that looks #adjective#',
      '#for_of# #media_type.a# about #story#',
      'about #story#',
      '#for_of# #media_type.a# about #number# #noun.s#',
      'about the #superlative# #noun#',
      'about #collection.a# of #noun.s#',
      'about the #media_type# #title#',
      '#for_of# #adjective.a# #media_type#',
      'about someone who #verbPast# #noun.a#',
    ],
    video_prompt: [
      '#generic_prompts#',
      'about #noun.a# heist',
      'about an island plagued with #noun.s#',
      '#for_of# #movie_genre.a# #media_type# about #noun.s#',
      'about the space ship #number#-#number# finding planet #noun#',
      'about the extinction of #noun.s#',
      'about #movie_genre.a# #media_type# where #noun.s# #verb#',
      'about #noun.s# deep in the woods during a full moon',
      'about #noun.a# that grows up #adverb#',
      'for the next #movie_genre# #media_type# about #story#',
    ],
    game_prompt: [
      '#generic_prompts#',
      'for #media_type.a# where you #verb# #noun.s#',
      'for the latest esports game about #story#',
      'for #game_genre.a# #media_type# about #story#',
      'for #game_genre.a# #media_type#',
      'for #game_genre.a# #game_genre# #media_type#',
      'for #game_genre.a# #game_genre# #media_type# about #noun.s#',
      'about having super #verbing# powers',
      'for #game_genre.a# #media_type# about #specificThings#',
    ],
    album_prompt: [
      'for the #superlative# #media_type#',
      'for the #media_type# #title#',
      'for #music_genre.a# band',
      'for #adjective.a# #music_genre# band',
      '#for_of# the #media_type# that caused #music_genre.a# band to get #verbPast#',
      'for the #name.s# #color# #media_type#',
    ],
    show_prompt: [
      'for the #media_type.a# #title#',
      '#for_of# #adjective.a# #music_genre# #media_type#',
      '#for_of# #media_type.a# that was kicked off stage for #verbing#',
      '#for_of# an indie #adjective# #media_type# trying to make it big',
      '#for_of# #music_genre.a# #media_type# playing basement shows at midnight',
    ],
    abstract_prompt: [
      'about the #sense# of #noun.s#',
      'about #collection.a# of #noun.s#',
      'about #story# and #story#',
      'about two #noun.s# in love',
      'about #specificThings#',
      'about #story# where everything is #color#',
      'of the color #color#',
      'using only the colors #color# and #color#',
    ],
    painting_prompt: [
      'about a massacre of #noun.s#',
      'about #adjective# fruit',
      'about the battle of #title#',
      'about love in #adjective.a# time',
      'of a panorama of #noun.s#',
    ],
    sketch_prompt: [
      'of #noun.a#',
      'of many #many_prompt#',
      'of something you can see right now',
      'of your favorite childhood memory',
      'of a nearby person',
      '#graph#',
      'about #specificThings#',
    ],
    many_prompt: ['#noun.s#', '#adjective# #noun.s#', '#noun.s# and #noun.s#'],
    comic_prompt: [
      'about #story#',
      'about your day today',
      'about your favorite memory',
      'about the #superlative# thing that ever happened to you',
      'about a bond between #noun# and #noun#',
      'about something that bothers you',
      'about #specificThings#',
      'about the failure of a business run by #noun.s#',
    ],
    book_prompt: [
      '#generic_prompts#',
      'that you would find in #adjective.a# library',
      'that you would find in the ruins of the temple of #title#',
      'of #adjective.a# #media_type# about #noun.s#',
      'for a story about #story#',
      'a collection of short stories about #noun.s#',
      'a set of #adjective# #media_type.s#',
      'the biography of #title#',
      'the biography of #name#',
      'an unfinished #media_type# about #specificThings#',
    ],
    graph: [
      'of a graph showing the relationship between #noun.s# and #noun.s#',
      'of a pie chart showing a sales breakdown of #noun.s#',
      'of a chart showing the business breakdown for #adjective.capitalize##space_dash##noun.capitalize# inc.',
      'of a venn diagram showing the relationship between #noun.s#, #noun.s#, and #noun.s#',
    ],
    story: [
      '#noun.a#',
      '#noun.s#',
      '#noun.a# #who_that# becomes #noun.a#',
      '#descriptiveNoun.a# that #verbSingular# #noun.s#',
      'an ode to #specificThings#',
      '#specificThings#',
      '#badStory#',
    ],
    badStory: [
      '#name.capitalize# the #adjective#',
      'the life of #name.capitalize#',
      '#noun.a# #who_that# #verbPast#',
      '#descriptiveNoun.a# #who_that# #verbPast#',
      '#descriptiveNoun.a# #who_that# #adverb# #verbPast#',
    ],
    title: [
      '#verb.capitalize##space_dash##noun.capitalize.s#',
      '#noun.capitalize##space_dash##noun.capitalize#',
      '#number.capitalize##space_dash##noun.capitalize.s#',
      '#noun.capitalize##space_dash##verb.capitalize#',
      "#name.capitalize#'s #noun.capitalize#",
      '#verbing.capitalize##space_dash##noun.capitalize#',
      '#adjective.capitalize##space_dash##noun.capitalize#',
      'the one who #verbSingular#',
      'the #descriptiveNoun# #who_that# #adverb# #verbPast#',
    ],
    for_of: ['for', 'of'],
    who_that: ['who', 'that'],
    space_dash: [' ', '', '-'],
    sense: ['smell', 'taste', 'sound'],
    collection: [
      'herd',
      'gathering',
      'group',
      'lot',
      'army',
      'pile',
      'collection',
      'couple',
      'pair',
    ],
    number: [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ],
    color: [
      'white',
      'yellow',
      'blue',
      'red',
      'green',
      'black',
      'brown',
      'azure',
      'ivory',
      'teal',
      'silver',
      'purple',
      'navy blue',
      'pea green',
      'gray',
      'orange',
      'maroon',
      'charcoal',
      'aquamarine',
      'coral',
      'fuchsia',
      'wheat',
      'lime',
      'crimson',
      'khaki',
      'hot pink',
      'magenta',
      'olden',
      'plum',
      'olive',
      'cyan',
    ],
    comic_panel_length: ['two', 'three', 'four', 'five', 'six'],
    game_genre: [
      'action',
      'shooter',
      'stealth',
      'survival',
      'battle royale',
      'rhythm',
      'horror',
      'metroidvania',
      'adventure',
      'text adventure',
      'visual novel',
      'role-playing',
      'rpg',
      'mmo',
      'roguelike',
      'jrpg',
      'party',
      'simulation',
      'strategy',
      'rts',
      'tower defense',
      'sports',
      'fighting',
      'racing',
      'card',
      'puzzle',
    ],
    movie_genre: [
      'comedy',
      'sci-fi',
      'horror',
      'romance',
      'action',
      'thriller',
      'drama',
      'mystery',
      'crime',
      'adventure',
      'fantasy',
      'animation',
    ],
    music_genre: [
      'blues',
      'country',
      'indie',
      'jazz',
      'noise',
      'punk',
      'rap',
      'rock',
      'soul',
      'electronic',
    ],
    descriptiveNoun: [
      'person',
      'human',
      'king',
      'queen',
      'kid',
      'child',
      'boy',
      'girl',
      'man',
      'woman',
      'friend',
      'dude',
      'individual',
      'folk',
      'lover',
    ],
    adjective: adjectives,
    adverb: adverbs,
    noun: nouns,
    verb: verbs,
    verbPast: verbPast,
    verbing: verbing,
    verbSingular: verbSingular,
    superlative: ['best', 'worst', 'coolest', 'fastest'],
    name: names,
    specificThings: specificThings,
  });

  grammar.addModifiers(baseEngModifiers);
  return grammar;
}

export function getArtPrompt() {
  return getGrammar().flatten('#artPrompt#');
}

export function getSketchPrompt() {
  return getGrammar().flatten('#sketchPrompt#');
}

export function getComicPrompt() {
  return getGrammar().flatten('#comicPrompt#');
}
