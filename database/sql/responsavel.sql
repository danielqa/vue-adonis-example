-- Table: "Responsavel"

-- DROP TABLE "Responsavel";

CREATE TABLE "Responsavel"
(
  nome character varying(255),
  cpf character varying(255)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Responsavel"
  OWNER TO postgres;
