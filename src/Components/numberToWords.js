export default function numberToWords(num) {
    const ones = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 
        'Eighteen', 'Nineteen'
    ];
    const tens = [
        '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
    const scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

    if (num === 0) return 'Zero';

    let word = '';
    let scale = 0;

    while (num > 0) {
        let part = num % 1000;
        if (part) {
            let partWord = '';
            if (part % 100 < 20) {
                partWord = ones[part % 100];
                part = Math.floor(part / 100);
            } else {
                partWord = ones[part % 10];
                part = Math.floor(part / 10);

                partWord = tens[part % 10] + (partWord ? ' ' + partWord : '');
                part = Math.floor(part / 10);
            }
            if (part) {
                partWord = ones[part] + ' Hundred' + (partWord ? ' ' + partWord : '');
            }
            word = partWord + (scales[scale] ? ' ' + scales[scale] : '') + (word ? ' ' + word : '');
        }
        scale++;
        num = Math.floor(num / 1000);
    }

    return word.trim();
}
