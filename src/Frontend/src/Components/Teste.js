import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

function Teste({Noticia}) {

    return (
        <div>
            <p>Titulo: {Noticia.Titulo}</p>
            <p>ID: {Noticia.id}</p>
            <p>Entidade: {Noticia.Entidade}</p>
            <p>Autor: {Noticia.Autor}</p>
            <p>Data: {Noticia.Data}</p>
            <p>Autor: {Noticia.Autor}</p>
            <p>TempoDeLeitura: {Noticia.TempoDeLeitura}</p>
            <p>Chamada: {Noticia.Chamada}</p>
            <p>LinkURL: {Noticia.LinkURL}</p>
            <p>Referencia: {Noticia.Referencia}</p>
            <p>Texto: {Noticia.Texto}</p>
            <p>Imagem: {Noticia.Imagem}</p>
        </div>
    );
};

export default Teste;

