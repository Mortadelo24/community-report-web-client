

class Report{
    constructor(
        public id: string,
        public complaint: string,
        public created_at: Date
    ){}
}

class ReportCreate{
    constructor(

    ){}
}

export {
    Report,
    ReportCreate
}