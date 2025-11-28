/**
 * Logger estruturado para o backend
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogData {
    [key: string]: any;
}

class Logger {
    private log(level: LogLevel, message: string, data?: LogData) {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            level,
            message,
            ...data,
        };

        console.log(JSON.stringify(logEntry));
    }

    info(message: string, data?: LogData) {
        this.log('info', message, data);
    }

    warn(message: string, data?: LogData) {
        this.log('warn', message, data);
    }

    error(message: string, data?: LogData) {
        this.log('error', message, data);
    }

    debug(message: string, data?: LogData) {
        if (process.env.NODE_ENV === 'development') {
            this.log('debug', message, data);
        }
    }
}

export const logger = new Logger();
