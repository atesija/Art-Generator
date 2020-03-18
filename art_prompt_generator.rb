require 'tracery'
require 'mods-eng-basic'

include Tracery

def adjective
    ['greasy', 'scary', 'bad', 'ugly', 'pretty', 'cute', 'fat']
end

def adverb
    ['slowly', 'sadly', 'quickly']
end

def noun
    ['bubble', 'plant', 'chair', 'window', 'building', 'germ', 'cat', 'square']
end

def verb
    ['run', 'kill', 'eat', 'rock']
end

def superlative
    ['best', 'worst', 'coolest', 'fastest']
end

def name
    ['bob', 'anthony', 'devin', 'alex', 'robert', 'michael']
end

grammar = createGrammar(
    {
        origin: '#[#set_art_type#]full_prompt#',
        full_prompt: '#art_style.capitalize# #art_type.a# #prompt#',
        art_style:
        [
            'paint',
            'draw',
            'sketch',
            'make',
            'create'
        ],
        set_art_type:
        [
            '[art_type:poster][media_type:movie,show][prompt:#video_prompt#]',
            '[art_type:game cartridge,game case,game title screen][media_type:game][prompt:#game_prompt#]',
            '[art_type:album cover][media_type:album][prompt:#album_prompt#]',
            '[art_type:show poster][media_type:band][prompt:#_prompt#]',
            '[art_type:abstract art][media_type:painting][prompt:#abstract_prompt#]',
            '[art_type:museum painting][media_type:painting][prompt:#_prompt#]',
            '[art_type:quick doodle,sketch,blind contour][media_type:doodle][prompt:#sketch_prompt#]',
            '[art_type:lot of][media_type:many][prompt:#many_prompt#]',
            '[art_type:comic,four panel comic,three panel comic,two panel comic][media_type:comic][prompt:#comic_prompt#]',
            '[art_type:book cover,book spine][media_type:book][prompt:#book_prompt#]'
        ],
        generic_prompts: [
            '#for_of# #media_type.a# that looks #adjective#',
            '#for_of# #media_type.a# about #story#'
        ],
        video_prompt: [
            '#generic_prompts#'
        ],
        game_prompt: [
            '#generic_prompts#'
        ],
        album_prompt: [
            'for a band about to #verb#',
            'for the #superlative# #media_type#'
        ],
        abstract_prompt: [
            'about the #sense# of #noun.s#',
            'about #collection.a# of #noun.s#',
            'about #story# and #story#'
        ],
        sketch_prompt: [
            'of #noun.a#',
            'of many #many_prompt#',
            'of something you can see right now',
            'of your favorite childhood memory'
        ],
        many_prompt: [
            '#noun.s#',
            '#adjective# #noun.s#',
            '#adjective#, #adjective# #noun.s#'
        ],
        comic_prompt: [
            'about #story#',
            'about your day today',
            'about your favorite memory',
            'about the #superlative# thing that ever happened to you'
        ],
        book_prompt: [
            '#generic_prompts#'
        ],
        story: [
            'the life of #name.capitalize#',
            '#noun.a# #who_that# #past_tense_verb#',
            '#noun.a#',
            '#noun.s#',
            '#name# the #adjective#',
            '#name# the #adjective# and #adjective#',
            '#noun.a# #who_that# becomes #noun.a#'
        ],
        for_of: ['for', 'of'],
        who_that: ['who', 'that'],
        sense: ['smell', 'taste', 'sound'],
        collection: ['herd', 'gathering', 'group', 'lot', 'army', 'pile', 'collection'],
        adjective: adjective,
        adverb: adverb,
        noun: noun,
        verb: verb,
        superlative: superlative,
        name: name
    }
)

grammar.addModifiers(Modifiers.baseEngModifiers);
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
puts grammar.flatten('#origin#')
