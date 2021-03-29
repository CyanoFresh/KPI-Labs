
CREATE SEQUENCE public.goods_id_seq;

CREATE TABLE public.goods (
                id BIGINT NOT NULL DEFAULT nextval('public.goods_id_seq'),
                name VARCHAR(100) NOT NULL,
                description VARCHAR(500) NOT NULL,
                price BIGINT NOT NULL,
                CONSTRAINT goods_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.goods_id_seq OWNED BY public.goods.id;

CREATE INDEX goods_idx1
 ON public.goods
 ( name );

CREATE SEQUENCE public.client_id_seq;

CREATE TABLE public.client (
                id BIGINT NOT NULL DEFAULT nextval('public.client_id_seq'),
                name VARCHAR(100) NOT NULL,
                phone VARCHAR(12) NOT NULL,
                email VARCHAR(128) NOT NULL,
                CONSTRAINT client_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.client_id_seq OWNED BY public.client.id;

CREATE INDEX client_idx1
 ON public.client
 ( name );

CREATE INDEX client_idx2
 ON public.client
 ( email );

CREATE TABLE public.orders (
                id BIGINT NOT NULL,
                client_id BIGINT NOT NULL,
                CONSTRAINT orders_pk PRIMARY KEY (id)
);


CREATE TABLE public.order_items (
                goods BIGINT NOT NULL,
                order_id BIGINT NOT NULL,
                CONSTRAINT order_items_pk PRIMARY KEY (goods, order_id)
);


ALTER TABLE public.order_items ADD CONSTRAINT goods_order_items_fk
FOREIGN KEY (goods)
REFERENCES public.goods (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.orders ADD CONSTRAINT client_orders_fk
FOREIGN KEY (client_id)
REFERENCES public.client (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.order_items ADD CONSTRAINT orders_order_items_fk
FOREIGN KEY (order_id)
REFERENCES public.orders (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
