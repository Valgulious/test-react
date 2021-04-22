import {useEffect, useRef} from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const PhoneInput = ({id, name, placeholder, isRequired}) => {

    const breakpoints = [576, 768, 992, 1430];

    const inputRef = useRef(null);

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const Input = styled.input`
        
        margin: 15px 5px 5px 20px;
        padding-left: 15px;
        height: 56px;
        border: 1px solid rgba(0, 0, 0, 0.32);
        box-sizing: border-box;
        border-radius: 4px;
        
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: rgba(0, 0, 0, 0.6);
        
        &:focus {
            outline: none !important;
            border: 2px solid #1665D8;
        }
        
        &:focus + label {
            display: block;
        }
        
        &:required:focus ~ span {
            color: #1665D8;
        }  
        
         ${mq[2]} {
           width: 328px;
        }
         
         ${mq[2]} {
            width: 90%;
        }
        
        ${mq[3]} {
            width: 328px;
        }
              
    `

    const Label = styled.label`
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #1665D8;
        
        display: none;
        position: absolute;
        top: 8px;
        left: 30px;
        background-color: white;
    `

    const DoEntireFormat = (event, eventType, elemId, rawInput, pattern, mask) => {
        // Error Handling
        if(pattern.length !== mask.length){
            throw new Error("data-format length must be equal to data-mask length");
        }
        // Don't break when the event gets fired unexpectedly.
        if(!rawInput || !mask || rawInput.length === 0 || rawInput.length > pattern.length + 1){
            if(mask){
                return {
                    value: mask,
                    cursorPosition: 0,
                };
            } else{
                return {
                    value: "",
                    cursorPosition: 0,
                };
            }
        }

        let input = inputRef.current;
        let startPosition = input.selectionStart;
        let cursorPosition = startPosition - 1;
        let formatted = '';
        let toBeFormatted = '';
        let moveCursor = true;
        // RegEx/data-format mattings
        let regExs = [
            {patternVal: "*", regEx: /^\d+$/},
            {patternVal: "a", regEx: /^[A-Z]+$/i},
            {patternVal: "A", regEx:  /[^a-z0-9]/gi},
        ];

        if(event.inputType === 'insertText'){
            formatted = rawInput.substring(0, cursorPosition);
            toBeFormatted = rawInput.substring(cursorPosition, pattern.length);
        } else if (event.inputType === 'deleteContentBackward'){
            formatted = rawInput.substring(0, cursorPosition);
            toBeFormatted = rawInput.substring(cursorPosition, pattern.length);
        } else if (event.inputType === 'insertFromPaste'){
            formatted = "";
            toBeFormatted = rawInput.substring(0, pattern.length);
        }

        while(formatted.length < pattern.length){
            //The cursor will jump forward past up to 2 mask chararacters
            let patternChar = pattern[formatted.length];
            let nextPatternChar = pattern[formatted.length + 1];
            let nextNextPatternChar = pattern[formatted.length + 2];
            let matchingRegEx = regExs.filter(x => x.patternVal === patternChar);
            let nextCharMatchingRegEx = regExs.filter(x => x.patternVal === nextPatternChar);
            let nextNextCharMatchingRegEx = regExs.filter(x => x.patternVal === nextNextPatternChar);

            if(matchingRegEx.length === 1){
                //This character must be validated
                if(matchingRegEx[0].regEx.test(toBeFormatted[0])){
                    formatted += toBeFormatted[0];
                    toBeFormatted = toBeFormatted.substring(2, pattern.length);
                } else {
                    if(formatted.length === cursorPosition){
                        startPosition--;
                    }
                    formatted += mask[formatted.length];
                    toBeFormatted = toBeFormatted.substring(2, pattern.length);
                }
            } else {
                formatted += mask[formatted.length];
                if(nextCharMatchingRegEx.length === 1){
                    if(nextCharMatchingRegEx[0].regEx.test(toBeFormatted[0])){
                        toBeFormatted = toBeFormatted.substring(0, 1) + toBeFormatted.substring(2, pattern.length - formatted.length);
                        formatted += toBeFormatted[0];
                        toBeFormatted = toBeFormatted.substring(2, pattern.length - formatted.length);
                        startPosition++;
                    }
                } else if(nextNextCharMatchingRegEx.length === 1){
                    if(nextNextCharMatchingRegEx[0].regEx.test(toBeFormatted[0])){
                        formatted += mask[formatted.length];
                        startPosition++;
                        toBeFormatted = toBeFormatted.substring(0, 1) + toBeFormatted.substring(3, pattern.length - formatted.length);
                        formatted += toBeFormatted[0];
                        startPosition++;
                        toBeFormatted = toBeFormatted.substring(2, pattern.length - formatted.length);
                    }
                } else {
                    toBeFormatted = toBeFormatted.substring(2, pattern.length - formatted.length);
                }
            }
        }

        return {
            value: formatted,
            cursorPosition: startPosition,
            moveCursor: moveCursor,
            eventType: eventType,
        };
    }

    useEffect(() => {

        const e = inputRef.current;

        const format = (elem, eventType, event) => {
            let result = DoEntireFormat(event, eventType, elem.id, elem.value, elem.getAttribute('data-format'), elem.getAttribute('data-mask'));
            elem.value = result.value;

            let positionToMoveCursorTo = 0;
            if(result.moveCursor && result.cursorPosition){
                positionToMoveCursorTo = result.cursorPosition;
            }

            if (elem.createTextRange && result.moveCursor) {
                let range = elem.createTextRange();
                range.move('character', positionToMoveCursorTo);
                range.select();
            } else if (elem.selectionStart && result.moveCursor) {
                elem.setSelectionRange(positionToMoveCursorTo, positionToMoveCursorTo);
            }
        }
        e.addEventListener('input', event => format(e, 'input', event));
        e.addEventListener('paste', event => format(e, 'paste', event));
        format(e)
    })

    const handleFocus = (e) => {
        const value = e.target.value;
        const index = value.indexOf(' ');
        if (-1 !== index) e.target.value = value.slice(0, index);
    }


    return (
        <>
            <Input ref={inputRef} id={id} name={name} type='text' placeholder={placeholder} required={isRequired}
                   data-format="+*************" data-mask="+             " onFocus={handleFocus}/>
            <Label htmlFor={id}>{placeholder}</Label>
        </>
    )
}

PhoneInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
}

export default PhoneInput;
