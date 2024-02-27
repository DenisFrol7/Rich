import React from 'react';

import "./header.scss"
const Header = () => {
    return (
        <>
            <header className="p-2 text-bg-dark header">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            {/*<svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">*/}
                            {/*    <use xlinkHreff="#bootstrap"></use>*/}
                            {/*</svg>*/}
                            <img src="/logo.png" className="logo" alt="logo"/>
                        </a>

                        <ul className="nav col-12 col-lg-auto m-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-3 text-white">Игры</a></li>
                            <li><a href="#" className="nav-link px-3 text-white">Сериалы</a></li>
                            <li><a href="#" className="nav-link px-3 text-white">Фильмы</a></li>
                            <li><a href="#" className="nav-link px-3 text-white">Аниме</a></li>
                            <li><a href="#" className="nav-link px-3 text-white">Книги</a></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark"
                                   placeholder="Search..." aria-label="Search"/>
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="divider"></div>
        </>
    );
};

export default Header;