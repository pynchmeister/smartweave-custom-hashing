/* warp/contract.js */
export function handle(state, action) {
    /* address of the caller is available in action.caller */
    if (action.input.function === 'initialize') {
      state.hasher = action.caller
    }
    if (action.input.function === 'accept7CharacterString' && action.caller === state.hasher) {
        // @TODO
        // state.hasher 
    }
    if (action.input.function === 'returnCIDCorrespondingContent' && action.caller === state.hasher) {
        // @TODO
    }
    return { state }
}