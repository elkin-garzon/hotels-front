import Swal from 'sweetalert2';

export class Alerts {

    async delete() {
        return Swal.fire({
            title: 'Desea Eliminar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar'
        })
    }
}
