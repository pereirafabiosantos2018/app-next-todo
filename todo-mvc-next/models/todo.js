// MobX
import { types } from "mobx-state-tree";

/**
 * Item de lista
 * @author Fabio Pereira dos Santos
 */
export const ToDoItem = types.model({
    
    /**
    * @param id Identificador da tarefa
    * @type number
    */
    id: types.optional(types.number, 0),
    
    /**
     * @param completed Indica se o item foi concluído
     * @type boolean
     */
    completed: types.optional(types.boolean, false),

    /**
     * @param description Descrição da tarefa
     * @type string
     */
    description: types.optional(types.string, ''),

    /**
     * @param edit Indica se o item está sendo editado ou não
     * @type boolean
     */
    edit: types.optional(types.boolean, false)
})
.actions(self => ({

    /**
     * Altera a descrição da tarefa
     * @param {string} updatedTaskText O novo texto da tarefa
     */
    changeDescription(updatedTaskText) {
        self.description = updatedTaskText;
    },

    /**
     * Altera o status da tarefa (Concluído / Não concluído)
     */
    changeCompleted() {
        self.completed = !self.completed;
        console.log('alterei o status para -> ', self.completed)
    }

}))

/**
* Lista de itens de tarefa
* @author Fabio Pereira dos Santos
* @returns array<ToDoItem>
*/
export const ListOfTodoItem = types.model({

    /**
     * Retorna um array
    * @param items A lista de itens
    */
    items: types.optional(types.array(ToDoItem), []) // pode iniciar com uma lista vazia
})
.actions(self => ({

    /**
     * Insere uma tarefa na lista
     * @param {ToDoItem} item A tarefa a ser inserida
     */
    addItem(item) {
        self.items.push(item);
    },

    /**
     * Remove o item informado da lista
     * @param {ToDoItem} item O item a remover da lista
     */
    deleteItem(item) {
        self.items.remove(item);
    }

}))
.views(self => ({

    /**
     * Obtém a quantidade total de itens na lista
     */
    get totalItems() {
        return self.items.length;
    },

    /**
     * Obtém todos os itens
     */
    get getAllItems() {
        return self.items;
    },

    /**
     * Obtém todos os itens que estão ativos
     */
    get getActiveItems() {
        return self.items.filter(x => x.completed === false);
    },

    /**
     * Obtém todos os itens que foram concluídos
     */
    get getCompletedItems() {
        return self.items.filter(x => x.completed === true);
    }

}))
.create();