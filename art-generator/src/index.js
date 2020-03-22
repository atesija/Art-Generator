import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createGrammar, baseEngModifiers } from 'tracery-grammar'

var adjectives = [
  'abandoned',
  'abdominal',
  'abhorrent',
  'abiding',
  'abject',
  'able',
  'able-bodied',
  'abnormal',
  'abounding',
  'abrasive',
  'abrupt',
  'absent',
  'absentminded',
  'absolute',
  'absorbed',
  'absorbing',
  'abstracted',
  'absurd',
  'abundant',
  'abusive',
  'abysmal',
  'academic',
  'acceptable',
  'accepting'
]

var grammar = createGrammar(
  {
      'origin': '#[#set_art_type#]full_prompt#',
      'full_prompt': '#art_style.capitalize# #art_type.a# #prompt#',
      'art_style':
      [
          'paint',
          'draw',
          'sketch',
          'make',
          'create'
      ],
      'set_art_type':
      [
          '[art_type:poster][media_type:movie,show][prompt:#video_prompt#]',
          '[art_type:game cartridge,game case,game title screen][media_type:game][prompt:#game_prompt#]',
          '[art_type:album cover][media_type:album][prompt:#album_prompt#]',
          '[art_type:show poster][media_type:band][prompt:#show_prompt#]',
          '[art_type:abstract art][media_type:painting][prompt:#abstract_prompt#]',
          '[art_type:museum painting,painting][media_type:painting][prompt:#painting_prompt#]',
          '[art_type:quick doodle,sketch,blind contour][media_type:doodle][prompt:#sketch_prompt#]',
          '[art_type:lot of,ton of,few][media_type:many][prompt:#many_prompt#]',
          '[art_type:comic,four panel comic,three panel comic,two panel comic][media_type:comic][prompt:#comic_prompt#]',
          '[art_type:book cover,book spine][media_type:book][prompt:#book_prompt#]'
      ],
      'generic_prompts': [
          '#for_of# #media_type.a# that looks #adjective#',
          '#for_of# #media_type.a# about #story#',
          '#for_of# #media_type.a# about #number# #noun.s#',
          'about the #superlative# #noun#',
          'about #collection.a# of #noun.s#',
          'about the #media_type# #title#',
          '#for_of# #adjective.a# #media_type#'
      ],
      'video_prompt': [
          '#generic_prompts#',
          'about #noun.a# heist',
          'about a space ship plagued with #noun.s#',
          '#for_of# #movie_genre.a# #media_type# about #noun.s#'
      ],
      'game_prompt': [
          '#generic_prompts#',
          'for #media_type.a# where you #verb# #noun.s#',
          'for the latest esports game about #story#',
          'for #game_genre.a# #media_type# about #story#',
          'for #game_genre.a# #media_type#',
          'for #game_genre.a# #game_genre# #media_type#',
          'for #game_genre.a# #game_genre# #media_type# about #noun.s#',
          'about having super #action_verb# powers'
      ],
      'album_prompt': [
          'for a band about to #verb#',
          'for the #superlative# #media_type#',
          'for the #media_type# #title#'
      ],
      'show_prompt': [
          'for the band #title#'
      ],
      'abstract_prompt': [
          'about the #sense# of #noun.s#',
          'about #collection.a# of #noun.s#',
          'about #story# and #story#',
          'about two #noun.s# in love'
      ],
      'painting_prompt': [
          'about a massacre of #noun.s#',
          'about #adjective# fruit',
          'about the battle of #title#',
          'about love in #adjective.a# time'
      ],
      'sketch_prompt': [
          'of #noun.a#',
          'of many #many_prompt#',
          'of something you can see right now',
          'of your favorite childhood memory'
      ],
      'many_prompt': [
          '#noun.s#',
          '#adjective# #noun.s#',
          '#adjective#, #adjective# #noun.s#'
      ],
      'comic_prompt': [
          'about #story#',
          'about your day today',
          'about your favorite memory',
          'about the #superlative# thing that ever happened to you',
          'about a bond between #noun# and #noun#'
      ],
      'book_prompt': [
          '#generic_prompts#',
          'that you would find in #adjective.a# library',
          'that you would find in the ruins of the temple of #title#'
      ],
      'story': [
          'the life of #name.capitalize#',
          '#noun.a# #who_that# #past_tense_verb#',
          '#noun.a#',
          '#noun.s#',
          '#name.capitalize# the #adjective#',
          '#name.capitalize# the #adjective# and #adjective#',
          '#noun.a# #who_that# becomes #noun.a#'
      ],
      'title': ['#verb.capitalize#-#noun.capitalize.s#', '#noun.capitalize##noun.capitalize#', '#number.capitalize# #noun.capitalize.s#', '#noun.capitalize# #verb.capitalize#', "#name.capitalize#'s #noun.capitalize#"],
      'for_of': ['for', 'of'],
      'who_that': ['who', 'that'],
      'sense': ['smell', 'taste', 'sound'],
      'collection': ['herd', 'gathering', 'group', 'lot', 'army', 'pile', 'collection', 'couple'],
      'number': ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      'game_genre': ['action', 'shooter', 'stealth', 'survival', 'battle royale', 'rhythm', 'horror', 'metroidvania', 'adventure', 'text adventure', 'visual novel', 'role-playing', 'rpg', 'mmo', 'roguelike', 'jrpg', 'party', 'simulation', 'strategy', 'rts', 'tower defense', 'sports', 'fighting', 'racing', 'card', 'puzzle'],
      'movie_genre': ['comedy', 'sci-fi', 'horror', 'romance', 'action', 'thriller', 'drama', 'mystery', 'crime', 'adventure', 'fantasy', 'animation'],
      'adjective': adjectives,
      'adverb': ['slowly', 'sadly', 'quickly', 'blindly'],
      'noun': ['tree', 'cat', 'fart'],
      'verb': ['run', 'puke'],
      'past_tense_verb': ['puked', 'jumped', 'killed'],
      'action_verb': ['running', 'killing', 'eating', 'flying', 'dying', 'moaning', 'barfing', 'driving'],
      'superlative': ['best', 'worst', 'coolest', 'fastest'],
      'name': ['bob', 'anthony', 'devin', 'alex', 'robert', 'michael', 'gerald', 'jerry', 'phil', 'cody', 'nik']
  }
)



grammar.addModifiers(baseEngModifiers); 

ReactDOM.render(
  <React.StrictMode>
  <h1>{grammar.flatten('#origin#')}</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
