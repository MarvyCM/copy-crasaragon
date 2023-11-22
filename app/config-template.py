import psycopg2

CRAS_CONEXION_BBDD="host='XXXXX' dbname='XXX'  port='XXXX' user='XXXX' password='XXXX'"

def conexion():
	return psycopg2.connect(CRAS_CONEXION_BBDD)
