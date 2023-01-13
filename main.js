"use strict"

const cheerio = require('cheerio')
const axios = require('axios').default

class Babla {
  /** CONSTANT MESSAGE VARIABLES FOR ERROR */
  #CANNOT_FIND_WORD; #PHASE_NOT_FOUND;

  #baseUrl; #urlForBeispiel; #data;

  constructor() {
    this.#baseUrl = 'https://www.babla.vn/dong-tu/tieng-duc/'
    this.#urlForBeispiel = 'https://de.bab.la/beispiele/deutsch/'
    this.#data = {}
    this.#CANNOT_FIND_WORD = 'Wir können nicht das Wort finden!'
    this.#PHASE_NOT_FOUND = 'This phase cannot be found!'
  }

  #t(title) {
    return title.text().toLocaleLowerCase()
  }

  async phasesOfVerben(verben, specifiedPhase = '*') {
    let tmp = specifiedPhase.toLocaleLowerCase().trim();
    const response = await axios.get(`${this.#baseUrl}${verben}`)

    if (response.status !== 200) {
      return {}
    }

    const $ = cheerio.load(response.data);

    try {
      await $('.conj-tense-wrapper').each(async (_, parent) => {
        $(parent).children('.conj-block.container.result-block').each(async (_, el) => {
          let bro = $(parent).children('.conj-tense-block')
          let cousinTitle = this.#t($(el))

          this.#data[cousinTitle] = {}

          await bro.each(async (_, brother) => {
            let brotherTitle = this.#t($(brother).children('.conj-tense-block-header')).replace(cousinTitle, '').trim()
            
            if (brotherTitle === '') {
              this.#data[cousinTitle] = {}
            } else {
              this.#data[cousinTitle][brotherTitle] = {}
            }

            await bro
              .children('.conj-item')
              .each((_, kleine) => {
                let nameKleine = this.#t($(kleine).children('.conj-person'))
                let valueKleine = this.#t($(kleine).children('.conj-result'))

                if (brotherTitle === '') {
                  this.#data[cousinTitle][nameKleine] = valueKleine
                } else {
                  if (nameKleine === '') {
                    this.#data[cousinTitle][brotherTitle] = valueKleine
                  } else {
                    this.#data[cousinTitle][brotherTitle][nameKleine] = valueKleine
                  }
                }
              })
          })
        })
      })
    } catch (error) {
      return this.#CANNOT_FIND_WORD
    }

    if (tmp === '*') {
      return JSON.stringify(this.#data, null, 2)
    } else {
      let isIncluded = Object.keys(this.#data).indexOf(tmp) !== -1
      if (isIncluded) {
        return JSON.stringify(this.#data[tmp], null, 2)
      }
      return this.#PHASE_NOT_FOUND
    }
  }

  async getExamples(verben) {
    const response = await axios.get(`${this.#urlForBeispiel}${verben}`)
  }
}

module.exports = new Babla()