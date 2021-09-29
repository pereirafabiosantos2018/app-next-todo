import { ToDoItem, ListOfTodoItem } from './todo'

it('Validação do objeto ', () => {

    const item = ToDoItem.create({
        id: 0,
        completed: false,
        description: ''
    })

    // Criação do item deve ser igual ao informado no teste a seguir
    expect(item.id).toBeDefined()
    expect(item.completed).toBeDefined()
    expect(item.description).toBeDefined()
    item.changeDescription('Fabio')
    item.changeCompleted();

    expect(item.description).toBe('Fabio')
})

it('Cria uma lista de itens', () => {
    
    const list = ListOfTodoItem.create({
        items: [
            {
                id: 0,
                completed: false,
                description: ''
            }
        ]
    })

    expect(list.items.length).toBe(1)
    expect(list.items[0].id).toBe(0)

    list.addItem(
    {
        id: 1,
        completed: false,
        description: 'Adicionado para o teste'
    });

    expect(list.items.length).toBe(2)
    expect(list.items[1].id).toBe(1)

    expect(list.totalItems).toBe(2)
})