(() => {
    const inputField = document.querySelector('.input-field')
    const allSpanTags = document.querySelectorAll('span')
    const lowercase = document.querySelector('#lowercase')
    const uppercase = document.querySelector('#uppercase')
    const camelcase = document.querySelector('#camelcase')
    const pascalcase = document.querySelector('#pascalcase')
    const kebabcase = document.querySelector('#kebabcase')
    const snakecase = document.querySelector('#snakecase')
    const trimcase = document.querySelector('#trim')

    function camelCase(str) {
        let result = ''
        let shouldCaptialize = false
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ')
                shouldCaptialize = true
            else {
                if (shouldCaptialize) {
                    result += str[i].toUpperCase()
                    shouldCaptialize = false
                } else {
                    result += str[i]
                }
            }
        }
        return result
    }

    function pascalCase(str) {
        let result = ''
        let shouldCapitalize = true
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                shouldCapitalize = true
            } else {
                if (shouldCapitalize) {
                    result += str[i].toUpperCase()
                    shouldCapitalize = false
                } else {
                    result += str[i].toLowerCase()
                }
            }
        }
        return result
    }

    function snakeCase(str) {
        return str.split(' ').filter(Boolean).join('_')
    }

    function kebabCase(str) {
        return str.split(' ').filter(Boolean).join('-')
    }

    function trim(str) {
        return str.split(' ').filter(Boolean).join('')
    }

    function convertString(str) {
        lowercase.innerText = str.toLowerCase()
        uppercase.innerText = str.toUpperCase()
        camelcase.innerText = camelCase(str)
        pascalcase.innerText = pascalCase(str)
        kebabcase.innerText = kebabCase(str)
        snakecase.innerText = snakeCase(str)
        trimcase.innerText = trim(str)
    }
    convertString(inputField.value.trim())

    inputField.addEventListener('input', () => {
        const value = inputField.value.trim()
        allSpanTags.forEach((tag) => {
            if (value === '') {
                tag.innerText = ''
            } else {
                convertString(value)
            }
        })
    })

})();