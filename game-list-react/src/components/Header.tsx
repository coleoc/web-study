const navList = [
    { label: "소개", target: "#introduce" },
    { label: "게임들", target: "#games" },
];

type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                {navList.map((item) => (
                    <a key={item.target} href={item.target}>{item.label}</a>
                ))}
            </nav>
        </header>
    );
}

export default Header;

