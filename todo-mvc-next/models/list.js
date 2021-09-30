//@ts-check

// MobX
import { types } from "mobx-state-tree";

export const Task = types.model({
    text: types.optional(types.string, '')
})
.actions(self => ({

    setTask(updatedText) {
        console.log('texto atualizado -> ', updatedText)
        self.text = updatedText;
    }

}))
.views(self => ({

    get getText() {
        console.log('texto retornado -> ', self.text)
        return self.text;
    },

}))
.create();

export const FilterOption = types.model({
    selected: types.optional(types.string, 'all')
})
.actions(self => ({

    /**
     * Altera a opção selecionada
     * @param {string} selectedOption A nova opção selecionada
     */
    setSelectedOption(selectedOption) {
        console.log('opção selecionada -> ', selectedOption);
        self.selected = selectedOption;
    }

}))
.views(self => ({

    /**
     * Obtém a opção selecionada
     */
    get getSelectedOption() {
        console.log('opção selecionada obtida -> ', self.selected)
        return self.selected;
    }

}))
.create();