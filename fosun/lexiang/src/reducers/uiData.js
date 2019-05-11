import {
    CHANGE_IS_LOADING, CHANGE_OCCUPATION_SHOW, CLOSE_OCCUPATION_SHOW, CHANGE_ATTENA, CHANGE_ATTENB,
    CHANGE_SERVICE, CLOSE_SELECTOR, SHOW_SELECTOR, CHANGE_ATTENC
} from '../actions'
//打开遮罩层
export const isLoading = (state = false, action) => {
    switch (action.type) {

        case CHANGE_OCCUPATION_SHOW:
            return !state
        case CLOSE_OCCUPATION_SHOW:
            return false
        case CHANGE_IS_LOADING:
            return action.val
        default:
            return state
    }
}

let SelectDefault = {
    isShow: false,
    target: "",
    selected: "",
    options: [],
}

//选择器是否显示
export const selectData = (state = SelectDefault, action) => {
    switch (action.type) {
        case SHOW_SELECTOR:
            return {
                ...state,
                isShow: true,
                target: action.target,
                selected: action.index,
                options: action.options,
            }
        case CLOSE_SELECTOR:
            return SelectDefault
        default:
            return state
    }
}


//确认注意项

let attenDataDefault = {
    attenA: true,
    attenB: true,
    attenC: true
}
export const attendData = (state = attenDataDefault, action) => {
    switch (action.type) {
        case CHANGE_ATTENA:
            return { ...state, attenA: !state.attenA }
        case CHANGE_ATTENB:
            return { ...state, attenB: !state.attenB }
        case CHANGE_ATTENC:
            return { ...state, attenC: !state.attenC }
        default:
            return state
    }
}




//客服是否显示
export const isShowService = (state = false, action) => {
    switch (action.type) {
        case CHANGE_SERVICE:
            return !state
        default:
            return state
    }
}



