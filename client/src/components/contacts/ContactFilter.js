import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {

    const contactContext = useContext(ContactContext);
    const text = useRef();

    const { clearFilter, filterContacts, filtered} = contactContext;

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Context..." onChange={onChange}/>
        </form>
    )
}

export default ContactFilter
