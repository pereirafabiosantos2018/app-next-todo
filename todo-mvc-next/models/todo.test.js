import { ToDoItem, ListOfTodoItem } from './todo'

/**
 * Primeiro teste
 */
it('Validação do objeto ', () => {

    const item = ToDoItem.create({
        id: 0,
        completed: false,
        description: '',
        edit: false
    })

    // Criação do item deve ser igual ao informado no teste a seguir
    expect(item.id).toBeDefined()
    expect(item.completed).toBeDefined()
    expect(item.description).toBeDefined()
    item.changeDescription('Fabio')
    item.changeCompleted();

    expect(item.description).toBe('Fabio')
})

/**
 * Segundo teste
 */
it('Cria uma lista de itens', () => {

    ListOfTodoItem.addItem({
        id: 0,
        completed: false,
        description: '',
        edit: false
    });

    expect(ListOfTodoItem.items.length).toBe(1)
    expect(ListOfTodoItem.items[0].id).toBe(0)

    ListOfTodoItem.addItem({
        id: 1,
        completed: false,
        description: 'Adicionado para o teste',
        edit: false
    });

    expect(ListOfTodoItem.items.length).toBe(2)
    expect(ListOfTodoItem.items[1].id).toBe(1)

    expect(ListOfTodoItem.totalItems).toBe(2)
})