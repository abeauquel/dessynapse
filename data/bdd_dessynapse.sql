--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5
-- Dumped by pg_dump version 10.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: dessynapse; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE dessynapse WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_France.1252' LC_CTYPE = 'French_France.1252';


ALTER DATABASE dessynapse OWNER TO postgres;

\connect dessynapse

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: mot; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mot (
    id integer NOT NULL,
    valeur text
);


ALTER TABLE public.mot OWNER TO postgres;

--
-- Name: mot_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mot_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mot_id_seq OWNER TO postgres;

--
-- Name: mot_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mot_id_seq OWNED BY public.mot.id;


--
-- Name: utilisateur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.utilisateur (
    pseudo text NOT NULL,
    mot_de_passe text,
    mail text,
    telephone text,
    couleur text,
    date_naissance text,
    nb_victoire integer
);


ALTER TABLE public.utilisateur OWNER TO postgres;

--
-- Name: mot id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mot ALTER COLUMN id SET DEFAULT nextval('public.mot_id_seq'::regclass);


--
-- Data for Name: mot; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: utilisateur; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.utilisateur VALUES ('flo', 'password', NULL, NULL, NULL, NULL, NULL);


--
-- Name: mot_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mot_id_seq', 4, true);


--
-- Name: mot mot_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mot
    ADD CONSTRAINT mot_pkey PRIMARY KEY (id);


--
-- Name: utilisateur utilisateur_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utilisateur
    ADD CONSTRAINT utilisateur_pkey PRIMARY KEY (pseudo);


--
-- PostgreSQL database dump complete
--

