import { createItem } from './item.js'
import { get, getOne, create, update, deleteUser } from './requests.js'

(function() {
    class User {
        constructor(name, description, price, image) {
            this.name = name
            this.description = description
            this.price = price
            this.image = image
        }

        newCar(id, name, description, price, image) {
            this.id = id
            this.name = name
            this.description = description
            this.price = price
            this.image = image
        }
    }

    const list = document.getElementById('list-form')

    async function generateElements() {
        const users = await get()
        for(let user of users) {
            let listItem = createItem(user.name, user.description, user.price, user.image)

            listItem.btnDetail.addEventListener('click', () => {
                // window.alert(user.name + '\n' + user.description + '\n' + user.price + '\n' + user.image)
                let div = document.createElement('div')
                div.style.background = 'green'
                div.style.width = '1000px'
                document.body.append(div)
            })

            listItem.btnDelete.addEventListener('click', () => {
                deleteUser(user.id)
                listItem.item.remove()
            })

            list.append(listItem.item)
        }
    }

    document.addEventListener('DOMContentLoaded', (e) => {
        generateElements()
    })
})()