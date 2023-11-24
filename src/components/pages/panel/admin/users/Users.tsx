import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';


interface Data {
  id: number;
  nombre: string;
  correo: string;
  activo: string;
  rol: string;
}

function createData(
  id: number,
  nombre: string,
  correo: string,
  activo: string,
  rol: string,
): Data {
  return {
    id,
    nombre,
    correo,
    activo,
    rol,
  };
}

const rows = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    correo: 'juan.perez@example.com',
    activo: "Si",
    rol: 'Administrador',
  },
  {
    id: 2,
    nombre: 'María García',
    correo: 'maria.garcia@example.com',
    activo: "NO",
    rol: 'Usuario',
  },
  {
    id: 3,
    nombre: 'Pedro Sánchez',
    correo: 'pedro.sanchez@example.com',
    activo: "Si",
    rol: 'Usuario',
  },
  {
    id: 4,
    nombre: 'Ana Rodríguez',
    correo: 'ana.rodriguez@example.com',
    activo: "Si",
    rol: 'Administrador',
  },
  {
    id: 5,
    nombre: 'Carlos López',
    correo: 'carlos.lopez@example.com',
    activo: "NO",
    rol: 'Usuario',
  },
  {
    id: 6,
    nombre: 'Laura Martínez',
    correo: 'laura.martinez@example.com',
    activo: "Si",
    rol: 'Usuario',
  },  
  {
    id: 7,
    nombre: 'Luisa García',
    correo: 'luisa.garcia@example.com',
    activo: "Si",
    rol: 'Usuario',
  },
  {
    id: 8,
    nombre: 'Andrés Fernández',
    correo: 'andres.fernandez@example.com',
    activo: "Si",
    rol: 'Usuario',
  },
  {
    id: 9,
    nombre: 'Isabel Gómez',
    correo: 'isabel.gomez@example.com',
    activo: "Si",
    rol: 'Usuario',
  },
  {
    id: 10,
    nombre: 'Miguel Rodríguez',
    correo: 'miguel.rodriguez@example.com',
    activo: "Si",
    rol: 'Usuario',
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string | boolean },
  b: { [key in Key]: number | string | boolean},
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'id ',
  },
  {
    id: 'nombre',
    numeric: false,
    disablePadding: true,
    label: 'Nombre del usuario',
  },
  {
    id: 'correo',
    numeric: false,
    disablePadding: false,
    label: 'Correo electrónico',
  },
  {
    id: 'activo',
    numeric: false,
    disablePadding: false,
    label: '¿Activo?',
  },
  {
    id: 'rol',
    numeric: false,
    disablePadding: false,
    label: 'Rol',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  onDeleteClick: () => void;
  onEditClick: () => void;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, onDeleteClick, onEditClick } = props;

  return (
    <Toolbar>
      {numSelected > 0 ? (
        <Typography variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography variant="h6" id="tableTitle" component="div">
          Users
        </Typography>
      )}
      {numSelected > 0 ? (
        <>
          <Tooltip title="Delete">
            <IconButton onClick={onDeleteClick}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={onEditClick}>
              <ModeEditIcon/>
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('id');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [selectedUser, setSelectedUser] = React.useState<Data | null>(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);


  const [openModal, setOpenModal] = React.useState(false);
  const [newUserData, setNewUserData] = React.useState({
    nombre: '',
    correo: '',
    activo: '',
    rol: '',
  });

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedUser = rows.find((user) => user.id === id);
    setSelectedUser(selectedUser || null);
    
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };


  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteClick = () => {
    // Implementar la lógica para eliminar los usuarios seleccionados
    setSelected([]); // Limpia la selección después de eliminar
  };

  const handleEditClick = () => {
    // Abre el modal de edición para el primer usuario seleccionado
    const firstSelectedUserId = selected[0];
    const selectedUser = rows.find((user) => user.id === firstSelectedUserId);
    if (selectedUser) {
      setSelectedUser(selectedUser);
      setOpenEditModal(true);
    }
  };


  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  const handleCreateUser = () => {
    // Agregar lógica para crear el usuario 

    setOpenModal(false);

  };

  const handleUpdateUser = () => {
    // Agregar lógica para actualizar el usuario 
    setOpenEditModal(false);
  };
  

  const handleEditFieldChange = (field: keyof Data, value: string | boolean) => {
    if (selectedUser) {
      setSelectedUser({
        ...selectedUser,
        [field]: value,
      });
    }
  };
  
  
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar 
          numSelected={selected.length}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
           
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.nombre}</TableCell>
                    <TableCell align="left">{row.correo}</TableCell>
                    <TableCell align="left">{row.activo}</TableCell>
                    <TableCell align="left">{row.rol}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow

                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => setOpenModal(true)}>
          Crear
        </Button>
      </Stack>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle>Crear Nuevo Usuario</DialogTitle>
          <DialogContent>
            <TextField
              label="Nombre"
              value={newUserData.nombre}
              onChange={(e) => setNewUserData({ ...newUserData, nombre: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Correo electrónico"
              value={newUserData.correo}
              onChange={(e) => setNewUserData({ ...newUserData, correo: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="¿Activo?"
              value={newUserData.activo}
              onChange={(e) => setNewUserData({ ...newUserData, activo: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Rol"
              value={newUserData.rol}
              onChange={(e) => setNewUserData({ ...newUserData, rol: e.target.value })}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(false)}>Cancelar</Button>
            <Button onClick={handleCreateUser} color="primary">
              Crear Usuario
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Actualizar Usuario</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <>
              <TextField
                label="Nombre"
                value={selectedUser.nombre}
                onChange={(e) => handleEditFieldChange('nombre', e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Correo electronico"
                value={selectedUser.correo}
                onChange={(e) => handleEditFieldChange('correo', e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Activo"
                value={selectedUser.activo}
                onChange={(e) => handleEditFieldChange('activo', e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Rol"
                value={selectedUser.rol}
                onChange={(e) => handleEditFieldChange('rol', e.target.value)}
                fullWidth
                margin="normal"
              />
              
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)}>Cancelar</Button>
          <Button onClick={handleUpdateUser} color="primary">
            Actualizar Usuario
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}