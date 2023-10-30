const Header = ({ title }) => {
    return (
        <main>
            <h1>{title}</h1>
        </main>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;