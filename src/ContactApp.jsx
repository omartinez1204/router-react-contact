
import {useEffect} from 'react'
import { Outlet, useLoaderData, Form, NavLink, useSubmit } from 'react-router-dom'

export const ContactApp = () => {

    const { contacts, q } = useLoaderData()
    const submit = useSubmit()

    useEffect( ()=>{
        document.getElementById('q').value = q
    }, [q] )

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            onChange={ ( e )=>{
                                submit(e.currentTarget.form)
                            } }
                        />
                        <div id="search-spinner"  aria-hidden hidden={true}/>
                        <div className="sr-only"  aria-live="polite" />
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {
                        contacts.length ? (
                            <ul>
                                {contacts.map((contact) => (
                                    <li key={contact.id}>
                                        <NavLink
                                            to={`contacts/${contact.id}`}
                                            className={({ isActive, isPending }) =>
                                                isActive
                                                    ? "active"
                                                    : isPending
                                                        ? "pending"
                                                        : null
                                            }
                                        >
                                            {contact.first || contact.last ? (
                                                <>
                                                    {contact.first} {contact.last}
                                                </>
                                            ) : (
                                                <i>No Name</i>
                                            )}{" "}
                                            {contact.favorite && <span>★</span>}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>
                                <i>No contacts</i>
                            </p>
                        )}
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}
