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
    },

    /**
     * Marca todos os itens como concluidos
     */
    markAllDone() {
        self.items.forEach(item => {
            item.completed = !item.completed;
        })
    },

    removeCompletedTasks() {
        
        let itensRemover = self.items.filter(x => x.completed === true);

        itensRemover.forEach(item => {
            this.deleteItem(item);
        })

    }

}))
.views(self => ({

    /**
     * Obtém a quantidade total de itens na lista
     */
    get totalItems() {

        let items = self.items.filter(x => x.completed === false).length;
        
        if (items === 0) {
            return 'Nothing to do';
        }
        else if (items === 1) {
            return '1 item left';
        }
        else {
            return items + ' items left';
        }
    },

    /**
     * Obtém todos os itens
     */
    get getAllItems() {
        console.clear()
        console.log('todos os itens -> ', self.items)
        return self.items.filter(x => x);
    },

    /**
     * Obtém todos os itens que estão ativos
     */
    get getActiveItems() {
        console.clear()
        console.log('itens ativos -> ', self.items.filter(x => x.completed === false))
        return self.items.filter(x => x.completed === false);
    },

    /**
     * Obtém todos os itens que foram concluídos
     */
    get getCompletedItems() {
        console.clear()
        console.log('itens finalizados -> ', self.items.filter(x => x.completed === true))
        return self.items.filter(x => x.completed === true);
    }

}))
.create();