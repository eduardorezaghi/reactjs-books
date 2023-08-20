import { createContext, useState } from "react";

const BooksContext = createContext();

/**
 * The BooksProvider component is a wrapper component that will provide
 * the context to all of its children. This means that any component that
 * is a child of BooksProvider will have access to the context.
 * 
 * @param {Object} props
 *
 * @returns {React.JSX.Element}
 */
export function BooksProvider ({ children }) {
    let [count, setCount] = useState(5);

    const value = {
        count,
        incrementCount: () => setCount(++count),
    };



    // Property children is a special property that contains all the JSX
    // that is passed between the opening and closing tags of a component.
        // In this case, the children of BooksProvider is the JSX that is
        // passed between the opening and closing tags of BooksProvider in
        // src/index.js.
    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    );
}

export default BooksContext;