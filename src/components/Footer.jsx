import React from 'react'

const Footer = () => {
    return (

        <div className="footer container py-4 ">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">
                        <i className="bi bi-bug"></i>
                        Marketplace
                        <i className="bi bi-bug"></i>
                    </h5>
                    <p className="small text-muted">Los Cielos se abrirán de nuevo.
                        La estrellas perderán su camino.
                        Y el miedo descenderá en la tierra.
                        Un santo despertara y destruirá el sello de cadenas.
                        Dientes voraces saquearan la tierra.
                        La tierra! Es cruel.
                        Sangre roja teñirá el suelo.
                        Bajo el Sol
                        Las ocho joyas de la leyenda y sabiduría aparecerán
                        Y Satán surgirá
                        Sigue estas palabras hombre sabio
                        Un día vendrá
                        sobre el cual las ocho estrellas serán juntadas.
                        Día de Pesadilla será llamado
                        Cuando los rayos del Paraíso dividirán el cielo y
                        Sonoros gemidos se escucharan en el Valle de la Muerte,
                        Y la luz vendrá a esta tierra del mundo que alguna vez fue olvidado.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary"
                        href="http://www.Webzen.com">Webzen.com</a></p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Info</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="http://www.Webzen.com">Home</a></li>
                        <li><a href="http://www.Webzen.com">Promociones</a></li>
                        <li><a href="http://www.Webzen.com">Reclamos</a></li>
                        <li><a href="http://www.Webzen.com">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Categorias</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="http://www.Webzen.com">Sets</a></li>
                        <li><a href="http://www.Webzen.com">Swords</a></li>
                        <li><a href="http://www.Webzen.com">Maces</a></li>
                        <li><a href="http://www.Webzen.com">Spears</a></li>
                        <li><a href="http://www.Webzen.com">Staffs</a></li>
                        <li><a href="http://www.Webzen.com">Others</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 pt-4">
                    <p className="small text-muted pt-4"> Reino de los caballeros del continente MU, el antiguo reino de lorencia es lugar de los Dark Knight llevaba una armadura oscura con una arma.
                        Después de la reunificación del ejército y del Reino Unido la ciudad de lorencia se convierte en un lugar muy especial.
                        Pero después de miles de años, el tamaño de Lorencia se redujo gradualmente en las ciudades y las aldeas.
                    </p>
                    <form>
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="consulta" aria-label="Recipient's username"
                                aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="bi bi-send-fill"></i><i
                                className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer