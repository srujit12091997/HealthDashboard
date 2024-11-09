import sqlite3
import pandas as pd

# Define the correct path - using raw string to handle Windows path
DB_PATH = r"C:\Users\sruji\Downloads\health_connect_export.db"

def open_health_database(db_path):
    """
    Opens a Health Connect database file and returns connection and cursor objects.
    """
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    return conn, cursor

def list_tables(cursor):
    """Lists all tables in the database."""
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    return [table[0] for table in cursor.fetchall()]

def read_table_to_dataframe(conn, table_name):
    """Reads a table into a pandas DataFrame."""
    return pd.read_sql_query(f"SELECT * FROM {table_name}", conn)

def explore_database(db_path):
    """Provides an overview of the database contents."""
    try:
        conn, cursor = open_health_database(db_path)
        tables = list_tables(cursor)
        
        print(f"\nExploring database at: {db_path}")
        print("\nFound tables:")
        for table in tables:
            cursor.execute(f"SELECT COUNT(*) FROM {table}")
            row_count = cursor.fetchone()[0]
            print(f"\n- {table}: {row_count} rows")
            
            # Show sample of columns
            cursor.execute(f"PRAGMA table_info({table})")
            columns = cursor.fetchall()
            print("  Columns:", ", ".join(col[1] for col in columns))
            
            # Show sample data if table is not empty
            if row_count > 0:
                cursor.execute(f"SELECT * FROM {table} LIMIT 1")
                sample = cursor.fetchone()
                print("\n  Sample data:")
                for col, val in zip([col[1] for col in columns], sample):
                    print(f"    {col}: {val}")
    except sqlite3.Error as e:
        print(f"SQLite error: {e}")
    finally:
        if 'conn' in locals():
            conn.close()

# Run the exploration
if __name__ == "__main__":
    try:
        print("Opening database file...")
        explore_database(DB_PATH)
    except Exception as e:
        print(f"Error: {e}")