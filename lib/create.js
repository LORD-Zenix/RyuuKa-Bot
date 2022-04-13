const fs = require('fs')
let _create = JSON.parse(fs.readFileSync('./database/create.json'))

/*
 * Common / Legendary / Mythic
 * Create by Ryuuka Botz
 * Recode Dari Febza
 */
        const addCommon = (sender, amount) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _create[position].common += amount
                fs.writeFileSync('./database/create.json', JSON.stringify(_create))
            }
        }
        
        const bukaCommon = (sender, amount) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _create[position].common -= amount
                fs.writeFileSync('./database/create.json', JSON.stringify(_create))
            }
        }        
        
        const getCommon = (sender) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _create[position].common
            }
        }

        const addLegendary = (sender, amount) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _create[position].legendary += amount
                fs.writeFileSync('./database/create.json', JSON.stringify(_create))
            }
        }
        
        const bukaLegendary = (sender, amount) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _create[position].legendary -= amount
                fs.writeFileSync('./database/create.json', JSON.stringify(_create))
            }
        }        
        
        const getLegendary = (sender) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _create[position].legendary
            }
        }
        
        const addMythic = (sender, amount) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _create[position].mythic += amount
                fs.writeFileSync('./database/create.json', JSON.stringify(_create))
            }
        }
        
        const bukaMythic = (sender, amount) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _create[position].mythic -= amount
                fs.writeFileSync('./database/create.json', JSON.stringify(_create))
            }
        }        
        
        const getMythic = (sender) => {
            let position = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _create[position].mythic
            }
        }

        const addCreate = (sender) => {
            const obj = {id: sender, common: 0, legendary: 0, mythic: 0}
            _create.push(obj)
            fs.writeFileSync('./database/create.json', JSON.stringify(_create))
        }
        const checkCreate = (sender) => {
            let status = false
            Object.keys(_create).forEach((i) => {
                if (_create[i].id === sender) {
                    status = true
                }
            })
            return status
        }
                
module.exports = { checkCreate, addCreate, addCommon, bukaCommon, getCommon, addLegendary, bukaLegendary, getLegendary, addMythic, bukaMythic, getMythic }